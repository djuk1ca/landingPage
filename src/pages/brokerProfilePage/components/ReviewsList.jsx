import { Link } from "react-router-dom";
import Review from "./Review";

export default function ReviewsList() {
    const n = 4;

    return(
        <div className="w-full bg-[#151516] border-[3px] rounded-t-[20px] border-[#252525] border-b-[#00818A] text-center text-white px-4 py-3 h-40 overflow-y-auto scroll-smooth scroll mb-10">
            <div className="flex justify-between pb-3">
                <h1 className="text-[1rem] lg:text-[1.25rem]  pb-2 font-thin tracking-tight">Carrier Provided Reviews</h1>
                <Link to="/reviews"><button className="px-4 py-[0.25rem] uppercase border-[1px] border-[#00818A] text-[#00818A] text-[0.75rem]">View All</button></Link >
            </div>

            <Review name="Anonymus Carrier" rating={4} description="Wow, best broker I've ever dealt with." />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
        </div>
    )
}