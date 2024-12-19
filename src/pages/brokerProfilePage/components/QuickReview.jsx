import DoughnutChart from "./DoughnutChart";
import StarRating from "./StarRating";

export default function QuickReview() {
    return(
        <div className="w-1/2 rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px]">
            <div className="flex w-full justify-between items-center px-4">
                <div className="w-12"></div>
                <h1 className="mt-2 text-[1.25rem] font-thin tracking-wider">Quick Review</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="px-4 mt-2 flex flex-col items-center">
                <p>Grading includes 0 total submitted Reviews</p>
                <StarRating className="mt-4 cursor-pointer transition-colors" />
            </div>
        </div>
    )
}