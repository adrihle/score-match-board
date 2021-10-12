import { screen, render, fireEvent } from '@testing-library/react';
import { ScorerContainer } from './scorer.container';
import {
    internalPipe,
    checkEmpty,
    checkErrors
} from './scorer.container.handler';
import {
    iMatch,
    iMatchInternal,
    iMatchInternalErrors,
} from '../../interfaces';

const onSubmit = () => null;

beforeEach(() => render(<ScorerContainer onSubmit={onSubmit}/>));

describe("Scorer container", () => {
    it('must display container title', () => {
        expect(screen.queryByText(/Scorer Match/i)).toBeInTheDocument();
    });
    test('internalPipe method must return a correct type', () => {
        expect(internalPipe(testingInternalPipeIncoming)).toEqual(testingInternalPipeOutgoing);
    });
    test('checkEmpty must check empty values and return boolean', () => {
        expect(checkEmpty(testingCheckEmptyIncoming)).toEqual(true);
    });
    test('checkErrors must check if score fields are valid', () => {
        expect(checkErrors(testingCheckErrorsIncoming)).toEqual(testingCheckErrorsOutgoing);
    });
    describe('inputs change value', () => {
        it('inputs localTeam update on change', () => {
            const container = render(<ScorerContainer onSubmit={onSubmit}/>);
            const input = container.container.querySelector(`#input-localTeam`)!;
            fireEvent.change(input, { target: { value: 'España' } });
            expect((input as any).value).toBe('España');
        });
        it('inputs localScore update on change', () => {
            const container = render(<ScorerContainer onSubmit={onSubmit}/>);
            const input = container.container.querySelector(`#input-localScore`)!;
            fireEvent.change(input, { target: { value: '4' } });
            expect((input as any).value).toBe('4');
        });
        it('inputs awayTeam update on change', () => {
            const container = render(<ScorerContainer onSubmit={onSubmit}/>);
            const input = container.container.querySelector(`#input-awayTeam`)!;
            fireEvent.change(input, { target: { value: 'Mexico' } });
            expect((input as any).value).toBe('Mexico');
        });
        it('inputs awayScore update on change', () => {
            const container = render(<ScorerContainer onSubmit={onSubmit}/>);
            const input = container.container.querySelector(`#input-awayScore`)!;
            fireEvent.change(input, { target: { value: '3' } });
            expect((input as any).value).toBe('3');
        });
    });
    describe('submit button', () => {
        test('show error message for empty form', () => {
            const container = render(<ScorerContainer onSubmit={onSubmit}/>);
            const submitButton = container.container.querySelector('#scorer-submit-button')!;
            fireEvent.click(submitButton);
            expect(screen.queryByText(/The form must be filled!/i)).toBeInTheDocument();
        });
    });
})

const testingInternalPipeIncoming: iMatchInternal = {
    localTeam: 'España',
    localScore: '4',
    awayTeam: 'Mexico',
    awayScore: '3'
};

const testingInternalPipeOutgoing: iMatch = {
    localTeam: 'España',
    localScore: 4,
    awayTeam: 'Mexico',
    awayScore: 3
};

const testingCheckEmptyIncoming: iMatchInternal = {
    localTeam: '',
    localScore: '',
    awayTeam: '',
    awayScore: ''
};

const testingCheckErrorsIncoming: iMatchInternal = {
    localTeam: 'Mexico',
    localScore: '123a#!##$',
    awayTeam: 'Mexico',
    awayScore: '-3'
};

const testingCheckErrorsOutgoing: iMatchInternalErrors = {
    localTeam: true,
    localScore: true,
    awayTeam: true,
    awayScore: true
};