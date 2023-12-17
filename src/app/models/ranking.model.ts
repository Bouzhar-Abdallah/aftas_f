import { Competition } from "./competition.model";
import { Member } from "./member.model";

export class Ranking{
    rank?: number;
    score?: number;
    member: Member;
    competition?: Competition;

    constructor(rank: number, score: number, member: Member, competition: Competition){
        this.rank = rank;
        this.score = score;
        this.member = member;
        this.competition = competition;
    }
}

export class Participation_Req{
    competition_code: string;
    member_num: number;

    constructor(competition_code: string, member_num: number){
        this.competition_code = competition_code;
        this.member_num = member_num;
    }
}