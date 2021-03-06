import { screen, render } from '@testing-library/react';
import { MatchLine } from './match-line.component';
import { iMatchExtended } from '@interfaces';

beforeEach(() => render(<MatchLine match={testingMatch} />));

describe("MatchLine component", () => {
    // it('must display component title', () => {
    //     expect(screen.queryByText(/MatchLine rendered!/i)).toBeInTheDocument();
    // });
    it('must display a local team name', () => {
        expect(screen.queryByText(/Spain/i)).toBeInTheDocument();
    });
    it('must display a local team score', () => {
        expect(screen.queryByText(/5/i)).toBeInTheDocument();
    });
    it('must display a away team name', () => {
        expect(screen.queryByText(/Mexico/i)).toBeInTheDocument();
    });
    it('must display a away team score', () => {
        expect(screen.queryByText(/3/i)).toBeInTheDocument();
    });
})

const testingMatch: iMatchExtended = {
    localTeam: 'Spain',
    localScore: 5,
    awayTeam: 'Mexico',
    awayScore: 3,
    inputDate: new Date('2021-10-03T09:55:38.286Z'),
    totalGoals: 8
}