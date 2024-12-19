import DoughnutChart from "./DoughnutChart";

export default function Reputation(){
    return(
        <div className="w-1/2 rounded-r-[20px] pl-10 pr-4 pb-4 bg-[#151516] text-left text-sm text-white border-[#252525] border-l-[#00818A] border-[3px]">
            <div className="flex w-full justify-between items-center">
                <h1 className="mt-2 text-[1.25rem] font-thin tracking-wider">Reputation</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <p className="mb-3">This broker has been in business since _date_ (8 years)</p>
            <p>We found 0 carrier companies with the same name</p>
        </div>
    )
}