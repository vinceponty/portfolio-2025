import skills from '../skills';

export type ExperienceDatesType = {
    start: string;
    end?: string;
}

export type ExperienceJobType = {
    dates?: ExperienceDatesType;
    name: string;
    missions: string[];
    skills: {
        primary: (keyof typeof skills)[];
        secondary?: string[];
    }
}

export type ExperienceType = {
    dates: ExperienceDatesType;
    isSchool?: boolean;
    name: string;
    link?: string;
    jobs?: ExperienceJobType[];
}