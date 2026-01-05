import BgImage from "../../assets/Home/Category.png";
import image2 from "../../assets/Home/Image2.png";
import image3 from "../../assets/Home/Image3.png";
import image4 from "../../assets/Home/Image4.png";

export default function Category() {
  const imageData = [
    { id: 1, image: image2, name: "Name" },
    { id: 2, image: image2, name: "Name" },
    { id: 3, image: image3, name: "Name" },
    { id: 4, image: image4, name: "Name" },
    { id: 5, image: image4, name: "Name" },
  ];

  return (
    <section
      className="w-full min-h-[500px] md:min-h-[750px] bg-cover bg-center bg-no-repeat bottom-3"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="px-6 md:px-10">
        <h1 className="bebas-font text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">
          CATEGORY
        </h1>
      </div>
      <div className="w-full px-6 md:px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {imageData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-[280px] h-auto object-contain"
            />
            <p className="mt-2 text-center text-lg font-medium urbanist">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
