import experiences from "@/lib/experiences";
import Experience from "@/components/pages/Home/Main/Experience";
import Icon from "@/components/base/Icon";

const Main = () => {
    return (
        <main className="pb-14 lg:pt-[84px]">
            <p className="relative mb-12 text-15 italic xl:mb-16">
                <Icon name="quote-left absolute -top-5 -left-8 -z-1 text-stone-300 text-5xl" />
                <span className="font-medium italic">Développeur front-end</span> passionné et
                expérimenté, j'ai à cœur de créer des{" "}
                <span className="font-medium italic">applications web</span> modernes, performantes
                et interactives. Motivé par le partage de connaissances et l'apprentissage continu,
                je souhaiterais rejoindre une équipe dynamique au sein de laquelle je pourrai mettre
                à profit mon expertise technique, mon sens du relationnel et mon intérêt pour
                l'UI/UX design. En m’appuyant principalement sur les librairies{" "}
                <span className="font-medium italic">React</span> et{" "}
                <span className="font-medium italic">Tailwindcss</span>, je saurai définir et
                concevoir des interfaces et fonctionnalités innovantes et utiles, parfaitement
                intégrées à un design system établi, tout en garantissant un rendu pixel-perfect.
                <span className="relative">
                    <Icon name="quote-right absolute text-5xl -left-5 text-stone-300 -z-1 -top-1" />
                </span>
            </p>
            <ul className="relative flex flex-col space-y-8 after:absolute after:left-0 after:top-0 after:-z-1 after:h-full after:w-px after:border-l after:border-dotted after:border-stone-400/80 sm:space-y-12 sm:after:left-[136px] xl:space-y-16">
                {experiences.map((experience) => (
                    <li key={experience.name}>
                        <Experience experience={experience} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Main;
