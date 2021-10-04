import { iMatch } from '../../interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
    iMatchInternal,
    iMatchInternalErrors,
    initialStateMatch,
    initialStateMatchErrors,
    inputPlaceholders,
    internalPipe,
    checkEmpty,
    checkErrors
} from './scorer.container.handler';
import './scorer.container.css';

export const ScorerContainer = ({ onSubmit }: iProps): JSX.Element => {
    const [match, setMatch]=useState<iMatchInternal>(initialStateMatch);
    const [error, setError]=useState<boolean>(false);
    const [fieldErrors, setFieldErrors]=useState<iMatchInternalErrors>(initialStateMatchErrors);


    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        // UPDATING STATE WITH A FORM FIELD VALUES
        setMatch(currentMatch => ({
            ...currentMatch,
            [e.target.name]: e.target.value
        }));
        setError(false);
        setFieldErrors(initialStateMatchErrors);
    };

    const onSubmitted = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // HERE WE CAN CHECK ABOUT FORM VALIDATORS, ONLY EMPTY FIELD 
        // IN THIS CASE AND CHECK IF SCORE ARE INT
        const errors: iMatchInternalErrors = checkErrors(match);
        let anyFieldError: boolean = false;
        Object.keys(errors).forEach((field: string) => {
            if (errors[field as keyof iMatchInternalErrors]){
                anyFieldError = true;
            }
        })
        if (onSubmit !== undefined && !checkEmpty(match) && !anyFieldError){
            onSubmit(internalPipe(match));
            // AFTER ONSUBMIT TO PARENT WE CLEAN THE FORM
            setMatch(initialStateMatch);
        } else if (checkEmpty(match)) {
            setError(true);
        } else if (anyFieldError){
            setFieldErrors(errors);
        } else {
            console.error('Method onSubmit not provided to Scorer container')
        }
    };

    return (
        <main className='scorer-container'>
            <h3 className='scorer-title'>Scorer Match</h3>
            <form onSubmit={onSubmitted} className='scorer-form'>
                <section className="scorer-input-container">
                    {Object.keys(initialStateMatch).map(
                        (score: string) => {
                            return <div key={score}>
                                <input 
                                    id={`input-${score}`}
                                    type="text"
                                    className={score.includes('Score') ? 'input-score' : 'input-team'}
                                    name={score}
                                    placeholder={inputPlaceholders[score as keyof iMatchInternal]}
                                    value={match[score as keyof iMatchInternal]}
                                    onChange={onChange}
                                />
                                {fieldErrors[score as keyof iMatchInternalErrors] 
                                    && <p className='scorer-input-error'>Wrong format</p>}
                            </div>
                    })}
                </section>
                {error && <p className="scorer-form-error">The form must be filled!</p>}
                <button id='scorer-submit-button' type="submit" className='scorer-btn'>ADD MATCH!</button>
            </form>
        </main>
    )
};

interface iProps {
    onSubmit?: (match: iMatch) => void;
}