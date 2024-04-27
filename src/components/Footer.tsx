import { socialLinks } from "@/lib/utilities";
import { Bungee, Montserrat, Gochi_Hand } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400" })

export default function Footer() {
    return (
        <footer className="w-full pt-0">

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

            <div className="w-full bg-orange-950 py-20">
                <div className="max-w-6xl mx-auto flex flex-col items-start justify-start space-y-14">

                    {/* <div className="w-full grid grid-cols-3 bg-[#f0eada] rounded-3xl px-8 py-10">
                        <div className="col-span-1 flex flex-col items-center justify-start">
                            <p className={`${bungee.className} text-left text-2xl text-orange-950`}>
                                Subscribe to our newsletter to stay up to date with everything Joy Thai!
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-start space-y-4">
                            <h1 className={`${bungee.className} text-left text-2xl text-red-500`}>
                                EMAIL ADDRESS
                            </h1>

                            <input className="w-72 flex flex-row items-center justify-end text-right text-base text-red-500 placeholder:text-red-500 font-normal px-4 py-4 bg-transparent border-2 border-solid border-orange-500 rounded-xl outline-none" placeholder="Email" />

                            <button className="w-72 flex flex-row items-center justify-center px-10 py-2 rounded-3xl bg-red-500">
                                <p className={`${bungee.className} text-center text-lg text-white font-normal`}>
                                    keep me posted!
                                </p>
                            </button>
                        </div>
                    </div> */}

                    <div className="w-full grid grid-cols-2">
                        <div className="col-span-1 flex flex-row items-center justify-start">
                            <h1 className={`${bungee.className} text-left text-5xl text-white font-normal`}>
                                Follow Us:
                            </h1>
                        </div>

                        <ul className="col-span-1 flex flex-row items-center justify-end space-x-10">
                            {socialLinks.map((link, idx) => {
                                return (
                                    <li>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            className="text-right text-6xl text-white"
                                        >
                                            {link.icon}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* <div className="w-full grid grid-cols-3 bg-[#f0eada] rounded-3xl px-8 py-10">
                        <div className="col-span-1 flex flex-col items-center justify-start">
                            <p className={`${bungee.className} text-left text-2xl text-orange-950`}>
                                Subscribe to our newsletter to stay up to date with everything Joy Thai!
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-start space-y-4">
                            <h1 className={`${bungee.className} text-left text-2xl text-red-500`}>
                                EMAIL ADDRESS
                            </h1>

                            <input className="w-72 flex flex-row items-center justify-end text-right text-base text-red-500 placeholder:text-red-500 font-normal px-4 py-4 bg-transparent border-2 border-solid border-orange-500 rounded-xl outline-none" placeholder="Email" />

                            <button className="w-72 flex flex-row items-center justify-center px-10 py-2 rounded-3xl bg-red-500">
                                <p className={`${bungee.className} text-center text-lg text-white font-normal`}>
                                    keep me posted!
                                </p>
                            </button>
                        </div>
                    </div> */}

                    <div className="w-full grid grid-cols-9 gap-4 border-y-2 border-white pt-12 pb-12">
                        <div className="col-span-3 flex flex-col items-start justify-start space-y-2">
                            <h1 className={`${bungee.className} text-left text-2xl text-white font-normal`}>
                                Joy Thai
                            </h1>

                            <p className={`${montserrat.className} text-left text-base text-white font-light`}>
                                1900 W Valley Blvd, Alhambra, CA 91803
                            </p>

                            <p className={`${montserrat.className} text-left text-base text-white font-light`}>
                                +1 (323) 736-1188
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-start space-y-2">
                            <h1 className={`${bungee.className} text-right text-xl text-white font-normal`}>
                                Site Map
                            </h1>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Homepage
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    About Us
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    What's on the Menu?
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Amazing Reviews
                                </p>
                            </a>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-start space-y-2">
                            <h1 className={`${bungee.className} text-right text-xl text-white font-normal`}>
                                Helpful Links
                            </h1>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Homepage
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    What's on the Menu?
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Amazing Reviews
                                </p>
                            </a>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-start space-y-2">
                            <h1 className={`${bungee.className} text-right text-xl text-white font-normal`}>
                                Our Socials
                            </h1>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Homepage
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    What's on the Menu?
                                </p>
                            </a>

                            <a>
                                <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                    Amazing Reviews
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2">
                        <div className="col-span-1 flex flex-row items-center justify-start">
                            <p className={`${montserrat.className} text-left text-base text-white font-light`}>
                                All Rights Reserved
                            </p>
                        </div>

                        <div className="col-span-1 flex flex-row items-center justify-end">
                            <p className={`${montserrat.className} text-right text-base text-white font-light`}>
                                Joy Thai 2024&nbsp;&nbsp;&copy;
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}