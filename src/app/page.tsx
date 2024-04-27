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

            <div id="about" className="max-w-7xl mx-auto grid grid-cols-5 gap-16 pt-24 pb-48 border-t-2 border-dashed border-orange-950">
                <div className="col-span-2 flex flex-col items-start justify-start">
                    <img
                        src="https://s3-media0.fl.yelpcdn.com/bphoto/OJwQeIn0W4phk6Sxw9eERQ/348s.jpg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-white rotate-6"
                    />

                    <img
                        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-white -rotate-6"
                    />

                    <img
                        src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
                        className="w-full h-[250px] object-cover rounded-3xl border-4 border-white rotate-6"
                    />
                </div>

                <div className="col-span-3 flex flex-col items-end justify-start space-y-8">

                    <div className="w-full flex flex-col items-end justify-start">
                        <p className={`${bungee.className} text-right text-5xl text-orange-950 font-semibold`}>
                            Our Story of
                        </p>
                        <p className={`${bungee.className} text-right text-5xl text-yellow-500 font-semibold`}>
                            Thai Culinary Passion
                        </p>
                    </div>

                    <div className="w-full flex flex-col items-end justify-start space-y-6">
                        <p className={`${montserrat.className} text-right text-2xl text-orange-950 font-light`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <p className={`${montserrat.className} text-right text-2xl text-orange-950 font-light`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <p className={`${montserrat.className} text-right text-2xl text-orange-950 font-light`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        {/* <p className={`${montserrat.className} text-right text-2xl text-orange-950 font-medium`}>
                            Nicholas, Gochi, Rena
                        </p> */}

                    </div>
                </div>
            </div>

            <div className="w-full pt-48">
                <div className="relative w-full flex flex-row items-center justify-start bg-yellow-400 pb-14 pt-20 -space-x-2">
                    <div className="absolute -top-20 w-full flex flex-row items-center justify-center">
                        <div className="bg-rose text-white bg-orange-950 px-12 py-4 rounded-3xl">
                            <h1 className={`${gochi.className} text-center text-7xl text-white`}>@joythaialhambra</h1>
                        </div>


                    </div>
                    <img
                        src="https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-white rotate-12"
                    />

                    <img
                        src="https://images.pexels.com/photos/12561886/pexels-photo-12561886.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-orange-950 -rotate-12"
                    />

                    <img
                        src="https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-white rotate-12"
                    />

                    <img
                        src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-orange-950  -rotate-12"
                    />

                    <img
                        src="https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-white rotate-12"
                    />

                    <img
                        src="https://images.pexels.com/photos/12561886/pexels-photo-12561886.jpeg"
                        className="w-64 h-64 object-cover rounded-3xl border-8 border-orange-950 -rotate-12"
                    />
                </div>
                {/* https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&w=600
                https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600
                https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=600
                https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=600
                https://images.pexels.com/photos/12561886/pexels-photo-12561886.jpeg?auto=compress&cs=tinysrgb&w=600 */}
            </div>
        </div>
    );
}