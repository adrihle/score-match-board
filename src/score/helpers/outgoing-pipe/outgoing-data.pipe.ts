import { iMatchExtended } from '@interfaces';

export const outgoingDataPipe = (matches: iMatchExtended[]): iMatchExtended[]  => matches
    .sort((a, b) => {
        return b.totalGoals - a.totalGoals || b.inputDate.getTime() - a.inputDate.getTime()
    });