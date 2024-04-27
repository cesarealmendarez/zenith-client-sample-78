import { BookOpen, Store } from "lucide-react";
import { Bungee, Montserrat, Gochi_Hand } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400" })

export default function Index() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-7 gap-16 pt-36 pb-24">
                {/* <div className="col-span-3">
                    <img
                        src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
                        className="w-full h-[500px] object-cover rounded-[300px]"
                    />
                </div> */}


                <div className={`${bungee.className} col-span-4 flex flex-col items-start justify-start space-y-8 pr-0`}>
                    <div className="space-y-2">
                        <h1 className="text-left text-6xl text-orange-950 font-normal"><span className="text-yellow-500">Indulge</span> in Thai</h1>
                        <h1 className="text-left text-6xl text-orange-950 font-normal">culinary magic, </h1>
                        <h1 className="text-left text-6xl text-orange-950 font-normal">one bite at a time!</h1>
                    </div>

                    <p className={`${montserrat.className} text-left text-2xl text-orange-950 font-light`}>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for. Print, and publishing industries for.
                    </p>

                    <div className="w-full flex flex-row items-center justify-start space-x-6">
                        <a
                            href=""
                            target=""
                            className="flex flex-row item-center justify-center px-6 py-2 bg-orange-950 border-2 border-solid border-orange-950 rounded-3xl space-x-3"
                        >


                            <p className="text-center text-lg text-white font-normal">
                                Visit Us!
                            </p>
                            {/* <Store className="text-left text-white" size={23} strokeWidth={1.5} /> */}
                        </a>
                        <a

                            href=""
                            target=""
                            className="flex flex-row item-center justify-center px-6 py-2 border-2 border-solid border-orange-950 rounded-3xl transition-all space-x-3"
                        >
                            <p className="text-center text-lg text-orange-950 font-normal">
                                View Menu
                            </p>
                            {/* <BookOpen className="text-left text-orange-950" size={23} strokeWidth={1.5} /> */}
                        </a>
                    </div>
                </div>

                <div className="col-span-3">
                    <img
                        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                        className="w-full h-[500px] object-cover rounded-[300px] border-8 border-white"
                    />
                </div>
            </div>
        </div>
    );
}