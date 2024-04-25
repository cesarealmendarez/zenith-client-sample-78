import { menu } from "@/lib/utilities";
import { Bungee, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function Menu() {
    return (
        <div className="w-full flex-col items-start justify-start pt-24">
            <div className="w-full bg-yellow-500">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-12 space-y-4">
                    <h1 className={`${bungee.className} text-center text-6xl text-orange-950`}>
                        Our Menu
                    </h1>

                    <p className={`${montserrat.className} text-center text-xl text-orange-950 font-normal`}>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </p>
                </div>
            </div>

            <ul className="max-w-7xl mx-auto flex flex-col items-start justify-start pt-24 space-y-12">
                {menu.categories.map((category, idx) => {
                    return (
                        <>
                            {((idx + 1) % 2) != 0 ?
                                <li
                                    key={idx}
                                    className="w-full flex flex-col items-start justify-start space-y-8"
                                >
                                    <div className="w-full flex flex-row items-center justify-start">
                                        <h1 className={`${bungee.className} text-left text-6xl text-orange-950 font-normal`}>
                                            {category.name}
                                        </h1>
                                    </div>

                                    <div className="w-full grid grid-cols-2 gap-12">
                                        <div className="col-span-1">
                                            <img
                                                src={category.image}
                                                className="w-full h-96 object-cover rounded-3xl"
                                            />
                                        </div>

                                        <ul className={`${montserrat.className} col-span-1 flex flex-col items-start justify-start space-y-8`}>
                                            {menu.items.filter(item => item.category == category.name).map((item, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className="w-full flex flex-row items-center justify-start border-b-2 border-dashed border-orange-950 pb-4"
                                                    >
                                                        <div className="grow flex flex-col items-end justify-end space-y-2">
                                                            <p className="grow text-right text-lg text-orange-950 font-normal">
                                                                {item.name}
                                                            </p>
                                                            <p>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <p className="text-right text-lg text-orange-950 font-normal">
                                                            {item.price}
                                                        </p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                                :
                                <li
                                    key={idx}
                                    className="w-full flex flex-col items-start justify-start space-y-8"
                                >
                                    <div className="w-full flex flex-row items-center justify-end">
                                        <h1 className={`${bungee.className} text-right text-6xl text-orange-950 font-normal`}>
                                            {category.name}
                                        </h1>
                                    </div>

                                    <div className="w-full grid grid-cols-2 gap-12">
                                        <ul className={`${montserrat.className} col-span-1 flex flex-col items-start justify-start space-y-8`}>
                                            {menu.items.filter(item => item.category == category.name).map((item, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className="w-full flex flex-row items-start border-b-2 border-dashed border-orange-950 pb-4"
                                                    >
                                                        <p className="text-left text-lg text-orange-950 font-normal">
                                                            {item.price}
                                                        </p>
                                                        <div className="grow flex flex-col items-end justify-end space-y-2">
                                                            <p className="grow text-right text-lg text-orange-950 font-normal">
                                                                {item.name}
                                                            </p>
                                                            <p>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
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
        </div>
    );
}