import { Bungee, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function About() {
    return (
        <div className="w-full flex-col items-start justify-start pt-24">
            <div className="w-full bg-yellow-500">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-12 space-y-4">
                    <h1 className={`${bungee.className} text-center text-6xl text-orange-950`}>
                        Our Story
                    </h1>

                    <p className={`${montserrat.className} text-center text-xl text-orange-950 font-normal`}>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </p>
                </div>
            </div>
        </div>
    );
}