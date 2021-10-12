import { inconmingDataPipe } from './incoming-data.pipe';
import { 
    iMatch,
    iMatchExtended
} from '@interfaces';

describe("Testing incoming data handler", () => {
    test('The function must complete nedded data for the cycle', () => {
        const fromInput: iMatch = {
            localTeam: 'España',
            localScore: 4,
            awayTeam: 'Mexico',
            awayScore: 3
        };

        const outputPipe: iMatchExtended = {
            ...fromInput,
            inputDate: new Date(),
            totalGoals: fromInput.localScore + fromInput.awayScore
        };

        expect(inconmingDataPipe(fromInput)).toEqual(outputPipe);
    })
});