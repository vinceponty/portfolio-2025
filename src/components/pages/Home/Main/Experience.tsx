import clsx from "clsx";

import Skill from "@/components/composite/Skill";
import ExternalLink from "@/components/composite/ExternalLink";

import skills from "@/lib/skills";

import type {
    ExperienceType,
    ExperienceDatesType,
    ExperienceJobType
} from "@/lib/experiences/types";

type ExperienceJobProps = { job: ExperienceJobType };

function ExperienceJob({ job }: ExperienceJobProps) {
    return (
        <>
            <h4
                className={clsx("mb-2", {
                    "flex flex-col sm:flex-row": job.dates,
                    "sm:pl-[159px]": !job.dates
                })}>
                {job.dates ? <ExperienceDates dates={job.dates} isSmall={true} /> : null}
                <span className="font-Sanchez pl-4 italic sm:pl-0">{job.name}</span>
            </h4>
            <div className="pl-4 sm:pl-[159px]">
                <p className="text-sm font-light">{job.description}</p>
                <ul className="mt-4 flex flex-row flex-wrap gap-3">
                    {job.skills.primary.map((skill) => (
                        <li key={skill}>
                            <Skill skill={skills[skill]} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

type ExperienceDatesProps = { dates: ExperienceDatesType; isSmall?: boolean; className?: string };

function ExperienceDates({ dates, isSmall, className }: ExperienceDatesProps) {
    return (
        <span
            className={clsx(
                "font-Sanchez relative min-w-[159px] pl-4 before:absolute before:left-0 before:top-1/2 before:h-[11px] before:w-px before:-translate-y-1/2 after:absolute after:-left-[5px] after:top-1/2 after:h-px after:w-[11px] after:-translate-y-1/2 sm:pl-0 sm:pr-12 sm:text-right sm:before:left-[136px] sm:after:left-[131px]",
                {
                    "pt-0.5 text-13 text-stone-700 before:bg-stone-700 after:bg-stone-700":
                        !isSmall,
                    "text-11 pt-1 text-stone-500 before:bg-stone-400 after:bg-stone-400": isSmall
                },
                className
            )}>
            {dates.end ? `${dates.start} - ${dates.end} ` : `Depuis ${dates.start} `}
        </span>
    );
}

type ExperienceProps = { experience: ExperienceType };

function Experience({ experience }: ExperienceProps) {
    return (
        <>
            <h3 className="flex flex-col sm:flex-row">
                <ExperienceDates dates={experience.dates} />
                <span className="flex-1 pl-4 font-bold sm:pl-0">
                    {experience.link ? (
                        <ExternalLink href={experience.link}>
                            <span>{experience.name}</span>
                        </ExternalLink>
                    ) : (
                        experience.name
                    )}
                </span>
            </h3>
            {experience.jobs?.length ? (
                <ul className="mt-3 flex flex-col gap-y-5 sm:mt-4">
                    {experience.jobs.map((job) => (
                        <li key={job.name}>
                            <ExperienceJob job={job} />
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
}

export default Experience;
