import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"i"> & {
    name: string;
    className?: string;
};

function Icon({ name, className, ...restProps }: IconProps) {
    return <i className={clsx(`icon-${name}`, className)} {...restProps} />;
}

export default Icon;
