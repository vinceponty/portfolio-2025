import Links from "@/components/pages/Home/Header/Links";

const Header = () => {
    return (
        <header className="pb-4 pt-6 sm:pb-8 sm:pt-10 md:pb-12 md:pt-16 lg:sticky lg:top-0 lg:pb-14 lg:pr-16 xl:pr-24">
            <h1 className="relative text-4xl font-bold after:absolute after:left-0 after:top-0 after:-z-1 after:h-[24px] after:w-full after:translate-y-[20px] after:bg-fluo">
                Vincent Ponty
            </h1>
            <h2 className="font-Sanchez my-6 text-xl italic sm:my-8">Senior front end developer</h2>
            <Links />
        </header>
    );
};

export default Header;
