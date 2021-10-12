import { iMatchExtended } from '@interfaces';
import { MatchLine } from '@components';
import './board.container.css';
import React from 'react';

export const BoardContainer = React.memo(({ matches }: iProps): JSX.Element => (
    <main className='board-container'>
    <h3 className='board-title'>Matches Board</h3>
        {matches?.length ? (
            <>
                {matches?.map((match) => {
                    return <MatchLine key={match.inputDate.toISOString()} match={match} />
                })}
            </>
        ):(
            <span className='board-empty'>Ups, this looks like empty!</span>
        )}
    </main>
));

interface iProps {
    matches?: iMatchExtended[];
}