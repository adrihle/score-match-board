import { iMatch } from '../../interfaces';
import './match-line.component.css';

export const MatchLine = ({ match }: iProps): JSX.Element => {
    return (
        <>
            {/* <h3>MatchLine rendered!</h3> */}
            <section className='line-container'>
                <p id='line-local-team'>{match.localTeam}</p>
                <span>{match.localScore}</span>
                <span className='vs'>VS</span>
                <span>{match.awayScore}</span>
                <p>{match.awayTeam}</p>
            </section>
        </>
    )
};

interface iProps {
    match: iMatch;
}