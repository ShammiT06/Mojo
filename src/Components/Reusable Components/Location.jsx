import Img from "../../assets/Home/Img.png"
import Tat from "../../assets/Home/special1.png"
import Tat1 from "../../assets/Home/special2.png"
import Bg from "../../assets/Home/Locations.png"
import { useState } from "react"

export default function Locations() {

  const location = [Img, Tat1, Tat]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? location.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === location.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div
      className="w-full h-[500px] sm:h-[650px] lg:h-[800px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 z-40 pt-10 sm:pt-16 lg:pt-20">
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 px-4">
          <span className="hidden sm:block w-[120px] lg:w-[280px] h-0.5 bg-gray-50"></span>

          <h1 className="text-white bebas-font text-[28px] sm:text-[48px] lg:text-[88px] text-center">
            OUR STORE LOCATIONS
          </h1>

          <span className="hidden sm:block w-[120px] lg:w-[240px] h-0.5 bg-gray-50"></span>
        </div>
      </div>
      <div className="absolute inset-0 z-50 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 pt-28 sm:pt-36 lg:pt-40 px-4">
        <button
          className="text-white text-xl sm:text-2xl lg:text-3xl px-3 py-2 border border-gray-50 rounded-full"
          onClick={handlePrev}
        >
          ←
        </button>
        <img
          src={location[currentIndex]}
          alt="Image Loading"
          className="w-[90%] sm:w-[500px] lg:w-[800px] 
                     h-[220px] sm:h-[350px] lg:h-[500px] 
                     object-cover rounded-lg shadow-lg"
        />
        <button
          className="text-white text-xl sm:text-2xl lg:text-3xl px-3 py-2 border border-gray-50 rounded-full"
          onClick={handleNext}
        >
          →
        </button>

      </div>

    </div>
  )
}
