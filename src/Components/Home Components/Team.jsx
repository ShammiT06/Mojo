import { useNavigate } from "react-router-dom";
import TeamImg from "../../assets/Home/Team.png";
import Person1 from "../../assets/Home/Team1.png";

export default function Team() {
    const navigate = useNavigate()
    const team = [
        {
            id: 1,
            name: "Demo1",
            image: Person1,
        },
        {
            id: 2,
            name: "Demo2",
            image: Person1,
        },
        {
            id: 3,
            name: "Demo3",
            image: Person1,
        },
        {
            id: 4,
            name: "Demo4",
            image: Person1,
        }
    ];

    return (
        <>
            <div className="relative w-full min-h-[780px] overflow-hidden">
                <img
                    src={TeamImg}
                    alt="Team"
                    className="absolute inset-0 w-full  object-contain"
                />
                <div className="absolute bottom-0 w-full h-[35%] bg-black z-10" />

                <div className="relative z-20 flex flex-col items-center pt-[330px]">
                    <p className="text-white text-[64px] font-extrabold tracking-widest urbanist">
                        OUR
                    </p>

                    <h1
                        className="text-[200px] font-extrabold leading-none -mt-6"
                        style={{
                            color: "rgba(180,180,180,0.6)",
                            WebkitTextStroke: "3px white",
                        }}
                    >
                        TEAM
                    </h1>
                </div>
            </div>
            <div className="bg-black flex items-center justify-center gap-20 px-5">
                {team.map((item) => ( 
                    <div key={item.id} className="text-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[250px] mx-auto rounded-xl"
                            onClick={()=>{navigate(`/individual/${item.id}`)}}
                        />
                        <h1 className="text-white mt-4 text-xl font-semibold">
                            {item.name}
                        </h1>
                    </div>
                ))}
            </div>
        </>
    );
}
