import { Gochi_Hand, Bungee, Montserrat, Caveat } from "next/font/google";

const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400" });
const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const caveat = Caveat({ subsets: ["cyrillic"], weight: "variable" })


export default function Reviews() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 py-48">
                <div className={`${bungee.className} col-span-1 flex flex-col items-start justify-start border-r-2 border-dashed border-orange-950`}>
                    <h1 className="text-left text-5xl text-orange-950 font-normal">Real reviews</h1>
                    <h1 className="text-left text-5xl text-orange-950 font-normal">from real</h1>
                    <h1 className="text-left text-5xl text-yellow-500 font-normal">guests, who</h1>
                    <h1 className="text-left text-5xl text-yellow-500 font-normal">really love us.</h1>
                </div>
                <div className={`${bungee.className} col-span-1 flex flex-col items-start justify-start space-y-6`}>
                    <p className={`${caveat.className} text-left text-3xl text-orange-950 font-thin italic`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="w-full flex flex-col items-start justify-start space-y-1">
                        <p className={`${caveat.className} text-left text-lg text-orange-950 font-medium`}>
                            Cesar Almendarez
                        </p>

                        <p className={`${caveat.className} text-left text-lg text-orange-950 font-light`}>
                            Alhambra, CA
                        </p>
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
            </div>
        </div>
    );
}