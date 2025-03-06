import Icon from "@/components/base/Icon";

import type { SkillType } from "@/lib/skills/types";

type SkillProps = {
    skill: SkillType;
};

const Skill = ({ skill }: SkillProps) => {
    return (
        <span className="text-13 flex max-w-fit flex-row space-x-2 rounded-full border border-stone-500 bg-stone-700/5 px-3 pt-px text-stone-600">
            <span>
                <Icon name={skill.icon} className="relative top-px text-xs" />
            </span>
            <span>{skill.label}</span>
        </span>
    );
};

export default Skill;
