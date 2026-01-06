import image from "../../assets/Resuable/CTA-6.png";

export default function Achievements() {
  const data = [
    { id: 1, image },
    { id: 2, image },
    { id: 3, image },
    { id: 4, image },
    { id: 5, image },
    { id: 6, image },
    { id: 7, image },
  ];

  return (
    <section className="w-full mt-20 overflow-hidden">
      <h1 className="text-center bebas-font md:text-[160px] text-[80px] lg:text-[180px]">
        ACHIEVEMENT
      </h1>

      <div className="flex gap-10 marquee w-full">
        {[...data, ...data].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={item.image}
              alt="achievement"
              className="w-[300px] h-[200px] max-w-none object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
