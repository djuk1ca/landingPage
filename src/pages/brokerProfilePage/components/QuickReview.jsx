import DoughnutChart from "./DoughnutChart";
import StarRating from "./StarRating";

export default function QuickReview() {
    return(
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4">
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