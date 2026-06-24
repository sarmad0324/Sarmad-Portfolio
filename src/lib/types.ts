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
    /** Optional ribbon shown on the homepage card and case-study header (e.g. "Featured · Paid Technical Audit"). */
    featuredBadge?: string;
    /** Overrides the default "Technical Delivery" heading for advisory engagements (e.g. "Key Findings & Recommendations"). */
    deliveryHeading?: string;
    /** Optional bottom-of-page CTA label; when set, replaces the default "Discuss Your Project" CTA. */
    ctaLabel?: string;
    /** Destination for the optional bottom CTA (defaults to the contact section). */
    ctaHref?: string;
    tags: string[];
    imageUrl: string;
    /** Optional additional images shown as a gallery on the case-study detail page. */
    gallery?: { src: string; alt: string; orientation?: "landscape" | "portrait" }[];
    link: string;
    linkLabel?: string;
}
export type Link ={
    nameEng:string;
    hash:string;

}