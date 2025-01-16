import DoughnutChart from "./DoughnutChart";
import StarRating from "./StarRating";

export default function QuickReview() {
    return(
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4 relative group">
            <div className="absolute inset-0 object-cover w-[101%] h-full bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 rounded-r-[20px] border-[#252525] border-l-[#00818A] border-[2px] z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                <h1 className="uppercase text-[#00818A] font-bold">Quick Reviews</h1>
                <p className="text-[0.8rem] text-center">Give a quick rating for a broker on a click</p>                
            </div>
            <p className="absolute top-2 left-4 text-red-500 z-0 text-[1.25rem]">*</p>


            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Quick Review</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="text-[0.7rem] lg:text-[0.8rem] my-4 flex flex-col items-center">
                <p>Grading includes 0 total submitted Reviews</p>
                <StarRating className="mt-4 cursor-pointer transition-colors" />
            </div>
        </div>
    )
}