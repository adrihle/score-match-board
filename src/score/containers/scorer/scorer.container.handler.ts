import { iMatch } from '../../interfaces';

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
        if (key.includes('Score') && isNaN(parseInt(match[key as keyof iMatchInternal]))){
            errors[key as keyof iMatchInternalErrors] = true;
        }
    });
    return errors;
}

export const initialStateMatch: iMatchInternal = {
    localTeam: '',
    localScore: '',
    awayTeam: '',
    awayScore: ''
};

export const initialStateMatchErrors: iMatchInternalErrors = {
    localTeam: false,
    localScore: false,
    awayTeam: false,
    awayScore: false
};

export const inputPlaceholders: iMatchInternal = {
    localTeam: 'LOCAL TEAM',
    localScore: 'LOCAL SCORE',
    awayTeam: 'AWAY TEAM',
    awayScore: 'AWAY SCORE'
};

export interface iMatchInternal {
    localTeam: string;
    localScore: string;
    awayTeam: string;
    awayScore: string;
};

export interface iMatchInternalErrors {
    localTeam: boolean;
    localScore: boolean;
    awayTeam: boolean;
    awayScore: boolean;
}