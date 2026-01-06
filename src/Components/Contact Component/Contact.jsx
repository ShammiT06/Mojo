import { useState } from "react";

export default function Contact() {
    const [active, setActive] = useState("chennai");

    return (
        <div className="mt-25 w-full min-h-[100px]">
            <div className="flex items-start justify-center">
                <div className="flex items-center gap-4 p-2 rounded-full border border-gray-300 bg-white shadow-sm">
                    <button
                        onClick={() => setActive("chennai")}
                        className={`px-10 py-4 rounded-full font-semibold transition-all
            ${active === "chennai"
                                ? "bg-[#3C3C3C] text-white"
                                : "bg-white text-black border border-gray-300"
                            }`}
                    >
                        CHENNAI
                    </button>
                    <button
                        onClick={() => setActive("bengaluru")}
                        className={`px-10 py-4 rounded-full font-semibold transition-all
            ${active === "bengaluru"
                                ? "bg-[#3C3C3C] text-white"
                                : "bg-white text-black border border-gray-300"
                            }`}
                    >
                        BENGALURU
                    </button>
                </div>
            </div>
            <div>
                {
                    active === "chennai" && <h1 className="text-center bebas-font">Hello Chennai</h1>}
                {
                    active === "bengaluru" && <h1 className="text-center bebas-font">Hello Bengaluru</h1>
                }
            </div>
        </div>

    );
}
