export interface iMatch {
    localTeam: string;
    localScore: number;
    awayTeam: string;
    awayScore: number;
};

export interface iMatchExtended extends iMatch {
    inputDate: Date;
    totalGoals: number;
}


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