import DoughnutChart from "./DoughnutChart";

export default function BasicInfo() {
    return(
        <div className="flex justify-center gap-8">
            <div className="relative group text-center text-white tracking-wider">
                <div className="absolute inset-0 object-cover w-full h-full bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 rounded-lg z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                    <h1 className="uppercase text-[#00818A] font-bold">Score:</h1>
                    <p className="text-[0.8rem] text-center">Proprietary rating formula weighted with reviews, disputes, age, and more</p>
                </div>
                <p className="absolute top-5 right-2 text-red-500 z-0 text-[2rem]">*</p>
                <p>Broker Logistics LLC </p>
                <DoughnutChart size={35} score={80} textSize={60} />
            </div>
            <div className="text-left text-[0.75rem] md:text-[1rem] text-white leading-7 tracking-wider">
                <p>Contact information overview</p>
                <p className="text-[#94A735]">123 Company Lane, State 54321</p>
                <p>(123) 456-7890</p>
                <p><u>broker@company.com</u></p>
                <p>John Smith</p>
                <p>MC: 000000</p>
                <p>USDOT: 000000</p>
            </div>
        </div>
    )
}