import DoughnutChart from "./DoughnutChart";

export default function Reputation(){
    return(
        <div className="w-full md:w-[45%] rounded-r-[20px] px-5 pr-4 pb-4 bg-[#151516] text-left text-sm text-white border-[#252525] border-l-[#00818A] border-[3px]">
            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Reputation</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <p className="text-[0.7rem] lg:text-[0.8rem] mb-3">This broker has been in business since _date_ (8 years)</p>
            <p className="text-[0.7rem] lg:text-[0.8rem]">We found 0 carrier companies with the same name</p>
        </div>
    )
}