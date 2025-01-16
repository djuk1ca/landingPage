import DoughnutChart from "./DoughnutChart";

export default function Factoring() {
    return(
        <div className="w-full md:w-[45%] rounded-r-[20px] bg-[#151516] text-center text-sm text-white border-[#252525] border-l-[#00818A] border-[3px] px-4">
            <div className="flex w-full justify-around items-center py-2">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-wider">Factoring</h1>
                <DoughnutChart size={12} score={40} textSize={15} />
            </div>
            <div className="my-2 text-[0.7rem] lg:text-[0.8rem]">
                <p>This broker has 2 credit strikes</p>
                <button className="w-1/2 border-[1px] border-[#00818A] my-4 py-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase">view strikes</button>
            </div>
        </div>
    )
}