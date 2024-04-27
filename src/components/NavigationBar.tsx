"use client"

import Link from "next/link";

import { Bungee } from "next/font/google";
import { navigationBarLinks } from "@/lib/utilities";
import { usePathname, useRouter } from "next/navigation";
import { CookingPot } from "lucide-react";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });

export default function NavigationBar() {

    const pathname = usePathname();
    const router = useRouter();


    return (
        <nav className={`${bungee.className} max-w-7xl mx-auto pt-24`}>
            <div className="w-full flex flex-row items-center">
                <div className="flex flex-row items-center justify-start space-x-0">
                    <a
                        href="/"
                        target="_self"
                        className="flex flex-col items-start justify-start"
                    >
                        <h1 className="text-left text-4xl text-orange-950 font-normal">
                            Joy Thai
                        </h1>
                        {/* <h1 className="text-left text-xl text-red-500 font-normal">
                            Alhambra
                        </h1> */}
                    </a>
                </div>

                <ul className="flex flex-row grow items-center justify-end space-x-6">
                    {navigationBarLinks.map((link, idx) => {
                        return (
                            <li key={idx}>
                                {/* <button
                                    // shallow={true}
                                    // href={link.href}
                                    // target={link.target}
                                    onClick={() => {
                                        // const element = document.getElementById("about")
                                        // element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                                        router.push("/")

                                        setTimeout(() => {
                                            const element = document.getElementById("about")
                                            element?.scrollIntoView({ behavior: "smooth" });
                                        }, 500);
                                    }}
                                    className="flex flex-row item-center justify-center px-6 py-2 border-2 border-solid border-orange-950 rounded-3xl transition-all"
                                >
                                    <p className="text-center text-lg text-orange-950 font-normal">
                                        About
                                    </p>
                                </button> */}
                                <>
                                    {link.type == "bold" ?
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="flex flex-row item-center justify-center px-6 py-2 bg-orange-950 border-2 border-solid border-orange-950 rounded-3xl space-x-4"
                                        >
                                            <p className="text-center text-lg text-white font-normal">
                                                {link.name}
                                            </p>

                                            {link.icon &&
                                                <>
                                                    {link.icon}
                                                </>
                                            }

                                        </a>
                                        :
                                        <>
                                            {link.href == pathname ?
                                                <Link
                                                    shallow={true}
                                                    href={link.href}
                                                    target={link.target}
                                                    className="flex flex-row item-center justify-center px-6 py-2 bg-yellow-500 border-2 border-solid border-yellow-500 rounded-3xl transition-all"
                                                >
                                                    <p className="text-center text-lg text-orange-950 font-normal">
                                                        {link.name}
                                                    </p>
                                                </Link>
                                                :
                                                <Link
                                                    shallow={true}
                                                    href={link.href}
                                                    target={link.target}
                                                    className="flex flex-row item-center justify-center px-6 py-2 border-2 border-solid border-orange-950 rounded-3xl transition-all"
                                                >
                                                    <p className="text-center text-lg text-orange-950 font-normal">
                                                        {link.name}
                                                    </p>
                                                </Link>
                                            }
                                        </>
                                    }
                                </>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}