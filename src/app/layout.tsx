import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
    src: [
        {
            path: "../../public/fonts/HelveticaNeue/HelveticaNeueRegular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/fonts/HelveticaNeue/HelveticaNeueItalic.woff2",
            weight: "400",
            style: "italic"
        },
        {
            path: "../../public/fonts/HelveticaNeue/HelveticaNeueBold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../public/fonts/HelveticaNeue/HelveticaNeueLight.woff2",
            weight: "300",
            style: "normal"
        },
        {
            path: "../../public/fonts/HelveticaNeue/HelveticaNeueMediumItalic.woff2",
            weight: "500",
            style: "italic"
        }
    ],
    variable: "--font-helvetica-neue"
});

export const metadata: Metadata = {
    title: "Vincent Ponty - Développeur web front-end",
    description:
        "Portfolio de Vincent Ponty, front end developer - Développement d'applications web modernes et performantes",
    keywords: [
        "ponty",
        "vincent",
        "developer",
        "développeur",
        "web",
        "frontend",
        "front",
        "senior",
        "limoges",
        "webdeveloper",
        "react",
        "tailwind",
        "reactjs",
        "tailwindcss",
        "javascript",
        "typescript",
        "next",
        "nextjs",
        "integrateur",
        "application",
        "création",
        "site",
        "interface",
        "haute-vienne",
        "limousin",
        "france",
        "design",
        "internet",
        "dut",
        "mmi",
        "multimedia",
        "webdesign",
        "sensoriel",
        "développement",
        "ingénieur",
        "engineer",
        "expérience",
        "angular"
    ],
    authors: [{ name: "Vincent Ponty", url: "https://www.vincentponty.fr" }],
    creator: "Vincent Ponty",
    publisher: "Vincent Ponty",
    applicationName: "Portfolio de Vincent Ponty",
    generator: "Next.js",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
        ],
        shortcut: ["/shortcut-icon.png"],
        apple: [
            { url: "/apple-touch-icon.png" },
            { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" }
        ],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-57x57.png",
                sizes: "57x57"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-72x72.png",
                sizes: "72x72"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-76x76.png",
                sizes: "76x76"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-114x114.png",
                sizes: "114x114"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-120x120.png",
                sizes: "120x120"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-144x144.png",
                sizes: "144x144"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-152x152.png",
                sizes: "152x152"
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-180x180.png",
                sizes: "180x180"
            }
        ]
    },
    openGraph: {
        title: "Vincent Ponty - Développeur web front-end",
        description:
            "Portfolio de Vincent Ponty, front end developer - Développement d'applications web modernes et performantes",
        url: "https://www.vincentponty.fr",
        siteName: "Portfolio de Vincent Ponty",
        images: "https://www.vincentponty.fr/og.png",
        locale: "fr_FR",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vincent Ponty - Développeur web front-end",
        description:
            "Portfolio de Vincent Ponty, front end developer - Développement d'applications web modernes et performantes",
        images: ["https://www.vincentponty.fr/og.png"]
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
    themeColor: "#E7E5E4"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${helveticaNeue.variable} font-HelveticaNeue text-stone-950 antialiased`}>
                <div className="bg-topography fixed bottom-0 left-0 right-0 top-0 -z-1 bg-stone-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-mainGradient" />
                {children}
            </body>
        </html>
    );
}
