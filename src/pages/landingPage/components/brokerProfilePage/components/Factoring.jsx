import DoughnutChart from "./DoughnutChart";

export default function Factoring() {
    return(
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4 relative group">
            <div className="absolute inset-0 object-cover w-[101%] h-full bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 rounded-r-[20px] border-[#252525] border-l-[#00818A] border-[2px] z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                <h1 className="uppercase text-[#00818A] font-bold">Factoring</h1>
                <p className="text-[0.8rem] text-center">See pertinent credit information such as average days to pay and total invoices</p>                
            </div>
            <p className="absolute top-2 left-4 text-red-500 z-0 text-[1.25rem]">*</p>


            <div className="flex w-full justify-between items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Factoring</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="my-2 text-[0.7rem] lg:text-[0.8rem]">
                <p>Has had 4324 invoices in the last 60 days</p>
                <p>Average days to pay is 33</p>
                <button className="w-1/2 border-[1px] border-[#00818A] my-4 py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase">view strikes</button>
            </div>
        </div>
    )
}