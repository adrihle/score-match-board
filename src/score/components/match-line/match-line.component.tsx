import { iMatchExtended } from '@interfaces';
import './match-line.component.css';

export const MatchLine = ({ match }: iProps): JSX.Element => {
    const { localTeam, localScore, awayScore, awayTeam } = match;
    return (
        <>
            {/* <h3>MatchLine rendered!</h3> */}
            <section className='line-container'>
                <p id='line-local-team'>{localTeam}</p>
                <span>{localScore}</span>
                <span className='vs'>VS</span>
                <span>{awayScore}</span>
                <p>{awayTeam}</p>
            </section>
        </>
    )
};

interface iProps {
    match: iMatchExtended;
}