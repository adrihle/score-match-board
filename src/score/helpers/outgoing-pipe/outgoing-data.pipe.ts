import { iMatch, iMatchExtended } from '../../interfaces';

export const outgoingDataPipe = (matches: iMatchExtended[]): iMatch[]  => {
    return matches.slice()
    .sort((a, b) => {
        return b.totalGoals - a.totalGoals || b.inputDate.getTime() - a.inputDate.getTime()
    })
    .map((match: iMatchExtended): iMatch => {
        return {
            localTeam: match.localTeam,
            localScore: match.localScore,
            awayTeam: match.awayTeam,
            awayScore: match.awayScore
        }
    });
};