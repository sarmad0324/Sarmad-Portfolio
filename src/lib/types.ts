import {links} from "./data";
export type SectionName = (typeof links ) [number]["hash"];
export type ProjectInfo = {
    title:string;
    description:string;
    problem?: string; // Problem statement for case study
    solution?: string; // Solution approach
    outcome?: string; // Results/outcome
    tags:string[];
    imageUrl:string;
    link:string;
}
export type Link ={
    nameEng:string;
    hash:string;

}