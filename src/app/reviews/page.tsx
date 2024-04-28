"use client"

import { Gochi_Hand, Bungee, Montserrat, Caveat } from "next/font/google";
import { useState } from "react";
import { reviews } from "@/lib/utilities";

const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400" });
const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const caveat = Caveat({ subsets: ["cyrillic"], weight: "variable" })

export default function Reviews() {
    const [review, setReview] = useState<Review>(reviews[0]);

    return (
        <div className="w-full flex">
            <div className="max-w-7xl mx-auto flex flex-row items-center gap-0 py-48 space-x-12">
                <div className={`${bungee.className} w-1/2 flex flex-col items-start justify-start`}>
                    <h1 className="text-left text-6xl text-orange-950 font-normal">Real reviews</h1>
                    <h1 className="text-left text-6xl text-orange-950 font-normal">from real</h1>
                    <h1 className="text-left text-6xl text-yellow-500 font-normal">guests, who</h1>
                    <h1 className="text-left text-6xl text-yellow-500 font-normal">really love us.</h1>
                </div>
                <div className="h-full flex-1 border-r-2 border-dashed border-orange-950">

                </div>
                <div className={`${bungee.className} w-1/2 flex flex-col items-start justify-start space-y-6`}>
                    <p className={`${caveat.className} text-left text-3xl text-orange-950 font-thin italic`}>
                        {review.review}
                    </p>

                    <div className="w-full flex flex-col items-start justify-start space-y-1">
                        <p className={`${caveat.className} text-left text-2xl text-orange-950 font-medium`}>
                            {review.reviewer}
                        </p>

                        <p className={`${caveat.className} text-left text-2xl text-orange-950 font-light`}>
                            {review.location}
                        </p>
                    </div>

                    <div className="w-full flex flex-row items-center justify-start space-x-4">
                        <button onClick={() => {
                            setReview(reviews[review.id - 1])
                        }}>
                            <img
                                src="/reviews/review-next-icon.png"
                                className={`w-12 h-12 object-cover scale-x-[-1] ${review.id > 0 ? `` : `opacity-20`}`}
                            />
                        </button>
                        <div className={`${caveat.className} flex flex-row items-center justify-start`}>
                            <p className="text-center text-xl text-orange-950 font-normal">{review.id + 1}</p>
                            <p className="text-center text-xl text-orange-950 font-normal">/</p>
                            <p className="text-center text-xl text-orange-950 font-normal">{reviews.length}</p>
                        </div>
                        <button onClick={() => {
                            setReview(reviews[review.id + 1])
                        }}>
                            <img
                                src="/reviews/review-next-icon.png"
                                className={`w-12 h-12 object-cover ${review.id == (reviews.length - 1) ? `opacity-20` : ``}`}
                            />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}