import DoughnutChart from "./DoughnutChart";

export default function VerifiedIncidents() {
    return (
        <div className="w-1/2 rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px]">
            <div className="flex w-full justify-between items-center px-4">
                <div className="w-12"></div>
                <h1 className="mt-2 text-[1.25rem] font-thin tracking-wider">Verified Incidents</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="px-4 mt-2">
                <p>This broker has 1 verified incident</p>
                <div className="mb-5 w-full flex justify-around">
                    <button className="w-1/3 border-[1px] border-[#00818A] mt-4 py-2 text-[0.75rem] bg-transparent font-bold text-[#00818A] uppercase">view strike</button>
                    <button className="w-1/3 border-[1px] border-[#00818A] mt-4 py-2 text-[0.75rem] bg-transparent font-bold text-[#00818A] uppercase">view strike</button>
                </div>
            </div>
        </div>
    )
}