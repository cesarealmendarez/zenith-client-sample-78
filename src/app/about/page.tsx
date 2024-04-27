import { Bungee, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function About() {
    return (
        <div className="w-full py-48">
            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-x-24">
                <div className="col-span-2 flex flex-col items-start justify-start">
                    <img
                        src="/about/about-1.jpeg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-solid border-white rotate-6"
                    />

                    <img
                        src="/about/about-2.jpeg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-solid border-white -rotate-6"
                    />

                    <img
                        src="/about/about-3.jpeg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-solid border-white rotate-6"
                    />
                </div>

                <div className="col-span-3 flex flex-col items-end justify-start space-y-8">
                    <div className={`${bungee.className} w-full flex flex-col items-end jusitfy-start space-y-2`}>
                        <h1 className="text-right text-5xl text-orange-950 font-semibold">
                            Our Story of
                        </h1>
                        <h1 className="text-right text-5xl text-yellow-500 font-semibold">
                            Thai Culinary Passion
                        </h1>
                    </div>

                    <div className={`${montserrat.className} w-full flex flex-col items-end jusitfy-start space-y-2`}>
                        <p className="text-right text-2xl text-orange-950 font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <p className="text-right text-2xl text-orange-950 font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <p className="text-right text-2xl text-orange-950 font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}