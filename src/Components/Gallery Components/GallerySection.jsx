export default function GallerySection() {
    const filters = [
        "ABSTRACT STYLE TATTOOS",
        "RELIGIOUS TATTOOS",
        "GEOMETRIC INKS",
        "BEST COVER UP TATTOOS",
        "ANIMAL TATTOOS",
    ];

    const activeFilter = "ABSTRACT STYLE TATTOOS";

    return (
        <section className="bg-black min-h-screen px-4 sm:px-8 md:px-10 py-12">
            <h1 className="text-white bebas-font font-medium leading-none
        text-[64px] sm:text-[100px] md:text-[180px]">
                GALLERY
            </h1>
            <div className="flex gap-3 mt-4 sm:mt-[-35px] sm:ml-[138px] flex-wrap">
                {filters.map((item, index) => {
                    const isActive = item === activeFilter;
                    return (
                        <button
                            key={index}
                            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition
                ${isActive
                                    ? "bg-gray-600 text-white"
                                    : "bg-white text-black"
                                }
              `}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <div
                className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4 sm:gap-6
          mt-12 sm:mt-16
          auto-rows-[140px] sm:auto-rows-[160px]
        "
            >
                <div className="bg-gray-300 rounded-2xl"></div>
                <div className="bg-gray-300 rounded-2xl"></div>
                <div className="bg-gray-300 rounded-2xl md:row-span-3"></div>
                <div className="bg-gray-300 rounded-2xl hidden md:block"></div>
                <div className="bg-gray-300 rounded-2xl row-span-2"></div>
                <div className="bg-gray-300 rounded-2xl row-span-2"></div>
                <div className="bg-gray-300 rounded-2xl md:row-span-2 hidden md:block"></div>
            </div>
        </section>
    );
}
