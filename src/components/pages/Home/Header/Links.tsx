import { linkCategories } from "@/lib/links";

import ExternalLink from "@/components/composite/ExternalLink";
import Icon from "@/components/base/Icon";

function Links() {
    return (
        <div>
            {linkCategories.map((category) => (
                <div key={category.name.label}>
                    {category.name.display ? (
                        <p className="mb-3 font-medium italic">{category.name.label}</p>
                    ) : null}
                    <ul className="mb-6 flex flex-col gap-y-2">
                        {category.links.map((link) => (
                            <li key={link.label}>
                                <ExternalLink
                                    href={link.url}
                                    className="flex flex-row items-center border-b border-dotted border-stone-500">
                                    <Icon className="relative -top-px mr-3" name={link.icon} />
                                    <span className="flex-1 pr-3 text-sm">{`${link.label} `}</span>
                                    <span className="font-Default text-xs italic text-stone-600 sm:text-sm">
                                        {link.data}
                                    </span>
                                </ExternalLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Links;
