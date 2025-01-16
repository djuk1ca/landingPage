import DoughnutChart from "./DoughnutChart";

export default function VerifiedIncidents() {
    return (
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4 relative group">
            <div className="absolute inset-0 object-cover w-[101%] h-full bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 rounded-r-[20px] border-[#252525] border-l-[#00818A] border-[2px] z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                <h1 className=" text-[1rem] text-[#00818A] font-bold uppercase">View Details Button</h1>
                <p className="text-[0.75rem] text-center text-white">Detailed incident reports for every kind of violation, including payment issues for lumper and detention, false carrier reports, and more.</p>
                <h1 className=" text-[1rem] text-[#00818A] font-bold uppercase">Report Button</h1>
                <p className="text-[0.75rem] text-center text-white">Contribute to the community by warning other carriers of this broker with a submitted report.</p>
            </div>
            <p className="absolute top-2 left-4 text-red-500 z-0 text-[1.25rem]">*</p>


            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Verified Incidents</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="text-[0.7rem] lg:text-[0.8rem]">
                <p>This broker has 1 verified incident</p>
                <div className="my-5 w-full flex justify-around">
                    <button className="w-1/3 border-[1px] border-[#00818A]  py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase z-100">View details</button>
                    <button className="w-1/3 border-[1px] border-[#00818A]  py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase z-100">Report</button>
                </div>
            </div>
        </div>
    )
}