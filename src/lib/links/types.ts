export type LinkType = {
    label: string;
    data: string;
    url?: string;
    icon: string;
}

export type LinksType = {
    name: {
        label: string;
        display: boolean;
    },
    links: LinkType[];
}