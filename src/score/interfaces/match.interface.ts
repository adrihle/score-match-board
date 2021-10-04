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