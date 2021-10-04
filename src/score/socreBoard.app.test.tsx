import { render, screen } from '@testing-library/react';
import { ScoreBoard } from './scoreBoard.app';

beforeEach(() => render(<ScoreBoard />));

describe("Score Board", () => {
    it("must display widget title", () => {
        expect(screen.queryByText(/Score Match Board/i)).toBeInTheDocument();
    });

    it("must display Scorer container title by integration", () => {
        expect(screen.queryByText(/Scorer Match/i)).toBeInTheDocument();
    })
});