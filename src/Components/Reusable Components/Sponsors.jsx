import Image from "../../assets/Home/special1.png"
function Sponsors() {

    const image = [{
        id:1,
        image:Image
    },
    {
        id:2,
        image:Image
    },
    {
        id:3,
        image:Image
    },
    {
        id:4,
        image:Image
    },
    {
        id:5,
        image:Image
    },
        {
        id:5,
        image:Image
    },
        {
        id:5,
        image:Image
    },
        {
        id:5,
        image:Image
    },
        {
        id:5,
        image:Image
    },
        {
        id:5,
        image:Image
    }
]

    return (<>
        <div className="bg-[#F0F0F0] w-full min-h-[490px] overflow-hidden">
            <div>
                <h1 className="bebas-font text-[80px] md:text-[120px] text-center mt-5">OUR <span className="text-[#7F7F7F]">SPONSORS</span></h1>
            </div>
            <div className="overflow-hidden w-full mt-10">
            <div className="flex gap-5 w-max marquee">
                {
                    image.map((item,index)=>{
                        return (<div>
                            <img src={item.image} alt="No Image" className="w-[150px] h-[150px] md:w-[250px] md:h-[155px]" />
                            </div>)
                    })
                }
            </div>
        </div>
        </div>
    </>)

}
export default Sponsors