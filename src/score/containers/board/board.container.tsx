import { iMatch } from '../../interfaces';
import { MatchLine } from '../../components';
import './board.container.css';

export const BoardContainer = ({ matches }: iProps): JSX.Element => {
    return (
        <main className='board-container'>
        <h3 className='board-title'>Matches Board</h3>
            {matches?.length ? (
                <>
                    {matches?.map((match, idx) => {
                        return <MatchLine key={idx} match={match} />
                    })}
                </>
            ):(
                <span className='board-empty'>Ups, this looks like empty!</span>
            )}
        </main>
    )
};

interface iProps {
    matches?: iMatch[];
}