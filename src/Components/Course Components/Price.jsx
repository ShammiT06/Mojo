import React from "react";

export default function Price() {
    return (
        <section className="w-full min-h-screen bg-[#F0F0F0] flex flex-col">


            <h1 className="text-center bebas-font text-[80px] md:text-[110px] mt-10">
                PRICE
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:items-end flex-1 pb-20">
                <div className="w-[300px] h-[500px] bg-white rounded-3xl" />
                <div className="w-[340px] h-[580px] bg-white rounded-3xl" />
                <div className="w-[300px] h-[500px] bg-white rounded-3xl" />

            </div>

        </section>
    );
}
