import Header from "@/components/pages/Home/Header";
import Main from "@/components/pages/Home/Main";

export default function Home() {
    return (
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 md:px-20 lg:flex lg:flex-row">
            <div className="lg:w-2/5 lg:min-w-96">
                <Header />
            </div>
            <div className="lg:w-3/5 lg:flex-1">
                <Main />
            </div>
        </div>
    );
}
