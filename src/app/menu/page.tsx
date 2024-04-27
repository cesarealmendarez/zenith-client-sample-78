import Link from "next/link";

import { menu } from "@/lib/utilities";
import { Bungee, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function Menu() {
    return (
        <div className="w-full flex-col items-start justify-start pt-24 overflow-x-clip">
            <div className="w-full bg-yellow-500">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-12 space-y-4">
                    <h1 className={`${bungee.className} text-center text-6xl text-orange-950`}>
                        Our Menu
                    </h1>

                    <p className={`${montserrat.className} text-center text-xl text-orange-950 font-light`}>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </p>
                </div>
            </div>

            <ul className="max-w-7xl mx-auto flex flex-col items-start justify-start py-24 space-y-12">
                {menu.categories.map((category, idx) => {
                    return (
                        <>
                            {((idx + 1) % 2) != 0 ?
                                <li
                                    key={idx}
                                    className="w-full flex flex-col items-start justify-start space-y-12"
                                >
                                    <div className="w-full flex flex-row items-center justify-start">
                                        <h1 className={`${bungee.className} text-left text-6xl text-orange-950 font-normal`}>
                                            {category.name}
                                        </h1>
                                    </div>

                                    <div className="w-full grid grid-cols-2 gap-16">
                                        <div className="col-span-1">
                                            <img
                                                src={category.image}
                                                className="w-full h-96 object-cover rounded-3xl"
                                            />
                                        </div>

                                        <ul className={`${montserrat.className} col-span-1 flex flex-col items-start justify-start`}>
                                            {menu.items.filter(item => item.category == category.name).map((item, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className={`w-full flex flex-row items-start justify-start border-b-2 border-dashed border-orange-950 ${idx > 0 ? `py-8` : `pb-8`}`}
                                                    >
                                                        <div className="flex flex-col grow items-start justify-start">
                                                            <p className="text-left text-lg text-orange-950 font-medium">
                                                                {item.name}
                                                            </p>

                                                            {item.description &&
                                                                <p className="text-left text-lg text-orange-950 font-light">
                                                                    {item.description}
                                                                </p>
                                                            }
                                                        </div>

                                                        <p className="text-right text-lg text-orange-950 font-light">
                                                            {item.price}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                                :
                                <li
                                    key={idx}
                                    className="w-full flex flex-col items-start justify-start space-y-12"
                                >
                                    <div className="w-full flex flex-row items-center justify-end">
                                        <h1 className={`${bungee.className} text-right text-6xl text-orange-950 font-normal`}>
                                            {category.name}
                                        </h1>
                                    </div>

                                    <div className="w-full grid grid-cols-2 gap-16">
                                        <ul className={`${montserrat.className} col-span-1 flex flex-col items-start justify-start`}>
                                            {menu.items.filter(item => item.category == category.name).map((item, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className={`w-full flex flex-row items-start justify-start border-b-2 border-dashed border-orange-950 ${idx > 0 ? `py-8` : `pb-8`}`}
                                                    >
                                                        <p className="text-left text-lg text-orange-950 font-light">
                                                            {item.price}
                                                        </p>

                                                        <div className="flex flex-col grow items-end justify-end">
                                                            <p className="text-right text-lg text-orange-950 font-medium">
                                                                {item.name}
                                                            </p>

                                                            {item.description &&
                                                                <p className="text-right text-lg text-orange-950 font-light">
                                                                    {item.description}
                                                                </p>
                                                            }
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className="col-span-1">
                                            <img
                                                src={category.image}
                                                className="w-full h-96 object-cover rounded-3xl"
                                            />
                                        </div>
                                    </div>
                                </li>
                            }
                        </>
                    );
                })}
            </ul>

            <Link
                shallow={true}
                href=""
                target=""
                className="max-w-4xl mx-auto grid grid-cols-2 pl-10 pr-4  bg-yellow-500 border-2 border-solid border-yellow-500 rounded-full transition-all h-36 py-3"
            >
                <div className="col-span-1 flex flex-col items-start justify-center">
                    <h1 className={`${bungee.className} text-left text-3xl text-orange-950 font-normal`}>
                        Like what
                    </h1>
                    <h1 className={`${bungee.className} text-left text-3xl text-orange-950 font-normal`}>
                        you're seeing?
                    </h1>
                </div>

                <div className="col-span-1 flex flex-row items-center justify-end">
                    <Link
                        href="#"
                        className="flex flex-col items-center justify-center bg-orange-950 rounded-full h-full px-16"
                    >
                        <p className={`${bungee.className} text-center text-base text-white font-normal`}>
                            Start Your
                        </p>
                        <p className={`${bungee.className} text-center text-base text-white font-normal`}>
                            Order
                        </p>
                    </Link>
                </div>
            </Link>

            <div className="pt-48">
                <div className={`${bungee.className} w-screen relative flex overflow-x-hidden bg-yellow-500`}>
                    <div className="py-12 animate-marquee whitespace-nowrap">
                        <span className="text-9xl text-orange-950 font-black mx-4"> Joy Thai </span>
                        <span className="text-9xl text-white font-black mx-4"> Pad Thai </span>
                        <span className="text-9xl text-white font-black mx-4"> Curry </span>
                        <span className="text-9xl text-white font-black mx-4"> Grill </span>
                    </div>

                    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <span className="text-9xl text-orange-950 font-black mx-4"> Joy Thai </span>
                        <span className="text-9xl text-white font-black mx-4"> Pad Thai </span>
                        <span className="text-9xl text-white font-black mx-4"> Curry </span>
                        <span className="text-9xl text-white font-black mx-4"> Grill </span>
                    </div>
                </div>
            </div>

        </div>
    );
}