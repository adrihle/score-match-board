import {
    iMatch,
    iMatchExtended
} from '@interfaces';

export const inconmingDataPipe = (match: iMatch): iMatchExtended => {
    return {
        ...match,
        inputDate: new Date(),
        totalGoals: match.localScore + match.awayScore
    };
};