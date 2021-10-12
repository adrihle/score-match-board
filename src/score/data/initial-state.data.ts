import {
    iMatchInternal,
    iMatchInternalErrors
} from '@interfaces';

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