import clsx from "clsx";

import Icon from "@/components/base/Icon";

import type { ComponentPropsWithoutRef } from "react";

function ExternalLink({ className, children, ...restProps }: ComponentPropsWithoutRef<"a">) {
    if (!restProps.href) {
        return <span className={className}>{children}</span>;
    }
    return (
        <a className={clsx("group", className)} target="_blank" {...restProps}>
            {children}
            <Icon
                name="arrow-top-right"
                className="text-10 ml-2 inline-block transition-transform group-hover:-translate-y-1/3 group-hover:translate-x-1/3"
            />
        </a>
    );
}

export default ExternalLink;
