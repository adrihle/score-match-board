import { iMatch, iMatchExtended } from './interfaces';
import { inconmingDataPipe, outgoingDataPipe } from './helpers';
import { ScorerContainer, BoardContainer } from './containers';
import { useState } from 'react';
import './scoreBoard.app.css';

export const ScoreBoard = (): JSX.Element => {
    const [matches, setMatches]=useState<iMatchExtended[]>([]);

    const incomingPipe = (match: iMatch): void => {
        setMatches(prev => [...prev, inconmingDataPipe(match)]);
    };

    const outgoingPipe = (): iMatch[] => {
        return outgoingDataPipe(matches);
    };

    return (
        <main className='scoreboard-main'>
            <h3 className='scoreboard-title'>SCORE MATCH BOARD</h3>
            <section className='scoreboard-container'>
                <ScorerContainer onSubmit={incomingPipe} />
                <BoardContainer matches={outgoingPipe()} />
            </section>
        </main>
    )
};