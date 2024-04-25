"use client"

import { Bungee } from "next/font/google";
import { navigationBarLinks } from "@/lib/utilities";
import { usePathname } from "next/navigation";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });

export default function NavigationBar() {

    const pathname = usePathname();

    return (
        <nav className={`${bungee.className} max-w-7xl mx-auto pt-12`}>
            <div className="w-full flex flex-row items-center">
                <div className="flex flex-row items-center justify-start space-x-0">
                    {/* <h1 className="text-left text-4xl text-red-500 font-normal">
                        Joy Thai Dining
                    </h1> */}
                </div>

                <ul className="flex flex-row grow items-center justify-end space-x-6">
                    {navigationBarLinks.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <>
                                    {link.type == "bold" ?
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="flex flex-row item-center justify-center px-6 py-2 bg-red-500 border-2 border-solid border-red-500 rounded-3xl"
                                        >
                                            <p className="text-center text-lg text-white font-normal">
                                                {link.name}
                                            </p>
                                        </a>
                                        :
                                        <>
                                            {link.href == pathname ?
                                                <a
                                                    href={link.href}
                                                    target={link.target}
                                                    className="flex flex-row item-center justify-center px-6 py-2 bg-red-500 border-2 border-solid border-red-500 rounded-3xl"
                                                >
                                                    <p className="text-center text-lg text-white font-normal">
                                                        {link.name}
                                                    </p>
                                                </a>
                                                :
                                                <a
                                                    href={link.href}
                                                    target={link.target}
                                                    className="flex flex-row item-center justify-center px-6 py-2 border-2 border-solid border-red-500 rounded-3xl"
                                                >
                                                    <p className="text-center text-lg text-red-500 font-normal">
                                                        {link.name}
                                                    </p>
                                                </a>
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