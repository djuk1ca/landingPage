import DoughnutChart from "./DoughnutChart";

export default function Reputation(){
    return(
        <div className="relative group w-full md:w-[45%] rounded-r-[20px] px-5 pr-4 pb-4 bg-[#151516] text-left text-sm text-white border-[#252525] border-l-[#00818A] border-[3px]">
            <div className="absolute inset-0 object-cover w-[101%] h-full bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 rounded-r-[20px] border-[#252525] border-l-[#00818A] border-[2px] z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                <h1 className="uppercase text-[#00818A] font-bold">Reputation</h1>
                <p className="text-[0.8rem] text-center">Highlights key points such as business age, compliance, and more at a glance</p>
                <h1 className="uppercase text-[#00818A] font-bold">View details button</h1>
                <p className="text-[0.8rem] text-center">View expanded credit information such as days to pay overtime and monthly volumes over time.</p>
            </div>
            <p className="absolute top-2 left-4 text-red-500 z-0 text-[1.25rem]">*</p>


            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Reputation</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-center">
                    <p className="text-[0.7rem] lg:text-[0.8rem]">Broker has been in business for 6 years.</p>
                    <p className="text-[0.7rem] lg:text-[0.8rem]">One recent report for a payment issue</p>
                </div>
                <button className="w-1/2 border-[1px] border-[#00818A]  py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase z-100">View details</button>
            </div>
        </div>
    )
}