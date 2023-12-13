import { Competition } from "./competition.model";
import { Fish } from "./fish.model";
import { Member } from "./member.model";

export class Hunt{
    id: number;
    numberOfFish: number;
    competition: Competition;
    member: Member;
    fish: Fish;

    constructor(id: number, numberOfFish: number, competition: Competition, member: Member, fish: Fish){
        this.id = id;
        this.numberOfFish = numberOfFish;
        this.competition = competition;
        this.member = member;
        this.fish = fish;
    }
}

export class Hunt_Req{
    numberOfFish: number;
    competition_code: string;
    member_num: number;
    fish_name: string;

    constructor(numberOfFish: number, competition_code: string, member_num: number, fish_name: string){
        this.numberOfFish = numberOfFish;
        this.competition_code = competition_code;
        this.member_num = member_num;
        this.fish_name = fish_name;
    }
}