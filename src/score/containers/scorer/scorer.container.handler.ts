import {
    iMatch,
    iMatchInternal,
    iMatchInternalErrors
} from '@interfaces';

// INTERNAL PIPE FOR HANDLE EASY FORM
export const internalPipe = (match: iMatchInternal): iMatch => {
    return {
        localTeam: match.localTeam,
        localScore: parseInt(match.localScore),
        awayTeam: match.awayTeam,
        awayScore: parseInt(match.awayScore)
    };
};

export const checkEmpty = (match: iMatchInternal): boolean => {
    let empty: boolean = false;
    Object.keys(match).forEach((key: string) => {
        if (!match[key as keyof iMatchInternal]){
            empty = true;
        }
    });
    return empty;
};

export const checkErrors = (match: iMatchInternal): iMatchInternalErrors => {
    let errors: iMatchInternalErrors = {
        localTeam: false,
        localScore: false,
        awayTeam: false,
        awayScore: false
    };
    Object.keys(match).forEach((key: string) => {
        if (key.includes('Score')
            && (isNaN(Number(match[key as keyof iMatchInternal])) || Number(match[key as keyof iMatchInternal]) < 0)
        ){
            errors[key as keyof iMatchInternalErrors] = true;
        } 
        else if (key.includes('Team') && match.awayTeam === match.localTeam) {
            errors[key as keyof iMatchInternalErrors] = true;
        }
    });
    return errors;
}


