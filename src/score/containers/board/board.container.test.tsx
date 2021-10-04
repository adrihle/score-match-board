import { screen, render } from '@testing-library/react';
import { BoardContainer } from './board.container';
import { iMatch } from '../../interfaces';

beforeEach(() => render(<BoardContainer matches={outgoingData}/>));

describe("Board container", () => {
    it('must display container title', () => {
        expect(screen.queryByText(/Matches Board/i)).toBeInTheDocument();
    });
    it('must display through components a sample of list of matches', () => {
        expect(screen.queryByText(/Greece/i)).toBeInTheDocument();
    });
    it('must display empty message when no matches', () => {
        render(<BoardContainer matches={[]} />)
        expect(screen.queryByText(/Ups, this looks like empty!/i)).toBeInTheDocument();
    })
})

const outgoingData: iMatch[] = [
    {
        localTeam: 'Brazil',
        localScore: 4,
        awayTeam: 'France',
        awayScore: 4
    },
    {
        localTeam: 'Spain',
        localScore: 5,
        awayTeam: 'Mexico',
        awayScore: 3
    },
    {
        localTeam: 'Greece',
        localScore: 3,
        awayTeam: 'Morroco',
        awayScore: 0
    },
    {
        localTeam: 'Germany',
        localScore: 2,
        awayTeam: 'England',
        awayScore: 1
    },
]