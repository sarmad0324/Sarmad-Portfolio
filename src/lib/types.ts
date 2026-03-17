import {links} from "./data";
export type SectionName = (typeof links ) [number]["hash"];
export type ProjectInfo = {
    slug: string;
    title: string;
    subtitle?: string;
    homepageSummary?: string;
    description: string;
    context?: string;
    role?: string;
    problem?: string;
    solution?: string;
    ownership?: string;
    outcome?: string;
    overview?: string;
    challenge?: string;
    whatIOwned?: string;
    whatIBuilt?: string;
    proofBullets?: string[];
    capabilityLine?: string;
    outcomeShort?: string;
    tags: string[];
    imageUrl: string;
    link: string;
    linkLabel?: string;
}
export type Link ={
    nameEng:string;
    hash:string;

}