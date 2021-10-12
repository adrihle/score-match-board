import { outgoingDataPipe } from './outgoing-data.pipe';
import {
    iMatchExtended
} from '@interfaces';

describe('Testing outgoing data handler', () => {
    test('The function must return a orderer array', () => {
        expect(outgoingDataPipe(dataStored)).toEqual(outgoingData);
    })
})

const dataStored: iMatchExtended[] = [
    {
        inputDate: new Date('2021-10-03T08:55:38.286Z'),
        localTeam: 'Spain',
        localScore: 5,
        awayTeam: 'Mexico',
        awayScore: 3,
        totalGoals: 8
    },
    {
        inputDate: new Date('2021-10-03T08:58:38.286Z'),
        localTeam: 'Germany',
        localScore: 2,
        awayTeam: 'England',
        awayScore: 1,
        totalGoals: 3
    },
    {
        inputDate: new Date('2021-10-03T09:55:38.286Z'),
        localTeam: 'Brazil',
        localScore: 4,
        awayTeam: 'France',
        awayScore: 4,
        totalGoals: 8
    },
    {
        inputDate: new Date('2021-10-03T19:55:38.286Z'),
        localTeam: 'Greece',
        localScore: 3,
        awayTeam: 'Morroco',
        awayScore: 0,
        totalGoals: 3
    }
];

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