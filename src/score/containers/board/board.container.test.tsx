import { screen, render } from '@testing-library/react';
import { BoardContainer } from './board.container';
import { iMatchExtended } from '../../interfaces';

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

const outgoingData: iMatchExtended[] = [
    {
        localTeam: 'Brazil',
        localScore: 4,
        awayTeam: 'France',
        awayScore: 4,
        inputDate: new Date('2021-10-03T09:55:38.286Z'),
        totalGoals: 8
    },
    {
        localTeam: 'Spain',
        localScore: 5,
        awayTeam: 'Mexico',
        awayScore: 3,
        inputDate: new Date('2021-10-03T08:55:38.286Z'),
        totalGoals: 8
    },
    {
        localTeam: 'Greece',
        localScore: 3,
        awayTeam: 'Morroco',
        awayScore: 0,
        inputDate: new Date('2021-10-03T19:55:38.286Z'),
        totalGoals: 3
    },
    {
        localTeam: 'Germany',
        localScore: 2,
        awayTeam: 'England',
        awayScore: 1,
        inputDate: new Date('2021-10-03T08:58:38.286Z'),
        totalGoals: 3
    },
]