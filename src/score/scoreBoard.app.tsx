import { iMatch, iMatchExtended } from '@interfaces';
import { inconmingDataPipe, outgoingDataPipe } from '@helpers';
import { ScorerContainer, BoardContainer } from '@containers';
import { useCallback, useState } from 'react';
import './scoreBoard.app.css';

export const ScoreBoard = (): JSX.Element => {
    const [matches, setMatches]=useState<iMatchExtended[]>([]);

    const incomingPipe = useCallback((match: iMatch): void => {
        setMatches(prev => outgoingDataPipe([...prev, inconmingDataPipe(match)]));
    },[]);

    return (
        <main className='scoreboard-main'>
            <h3 className='scoreboard-title'>SCORE MATCH BOARD</h3>
            <section className='scoreboard-container'>
                <ScorerContainer onSubmit={incomingPipe} />
                <BoardContainer matches={matches} />
            </section>
        </main>
    )
};


