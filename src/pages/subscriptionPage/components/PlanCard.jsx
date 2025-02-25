import { FaCircleArrowRight } from "react-icons/fa6";


export default function PlanCard({name, price, duration, invert}) {
    return(
        <div className={`w-[80%] lg:w-[25%] h-max lg:min-h-[50vh] flex flex-col justify-between gap-8  text-white rounded-[2rem] p-10 lg:p-6 text-left shadow-[-20px_-20px]
        ${invert ? "shadow-[#C4CB38] bg-[#2F2F2F]" : "shadow-[#2F2F2F] bg-[#C4CB38]"}`}>
            <div className="w-full flex flex-wrap justify-between leading-10">
                <h1 className="w-full uppercase text-[3rem] text-white font-bold">{name}</h1>
                <p className="w-max text-[1.5rem] font-thin">PLAN</p>
                <p className={`w-max text-[1.5rem] font-bold ${invert ? "text-[#C4CB38]" : "text-white"}`}>{price} <span className="text-[1rem] font-thin">/ {duration}</span></p>
            </div>
            <ul className="font-thin text-[1rem]">
                <li>✓ Lorem ipsum statement</li>
                <li>✓ Lorem ipsum statement</li>
                <li>✓ Lorem ipsum statement</li>
                <li>✓ Lorem ipsum statement</li>
                <li>✓ Lorem ipsum statement</li>
                <li>✓ Lorem ipsum statement</li>
            </ul>
            <a href="#" className={`w-full rounded-full  relative flex justify-between items-center text-[#2F2F2F] uppercase font-bold pl-4 px-2 py-2  transition-all duration-300 
                ${invert ? "bg-[#232323] text-[#F7FF51] hover:shadow-[0px_0px_10px_rgb(35,35,35)] focus:shadow-[0px_0px_10px_rgb(35,35,35)]" : 
                "bg-[#F7FF51] text-[#2F2F2F]"} transition-shadow duration-300 hover:shadow-[0px_0px_10px_rgb(247,255,81)] focus:shadow-[0px_0px_10px_rgb(247,255,81)]`}>
                    Learn More <FaCircleArrowRight color={invert ? "#F7FF51" : "#2F2F2F"} size={25}/></a>
        </div>
    )
}