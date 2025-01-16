import DoughnutChart from "./DoughnutChart";

export default function VerifiedIncidents() {
    return (
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4">
            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Verified Incidents</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="text-[0.7rem] lg:text-[0.8rem]">
                <p>This broker has 1 verified incident</p>
                <div className="my-5 w-full flex justify-around">
                    <button className="w-1/3 border-[1px] border-[#00818A] py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase">view strike</button>
                    <button className="w-1/3 border-[1px] border-[#00818A] py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase">view strike</button>
                </div>
            </div>
        </div>
    )
}