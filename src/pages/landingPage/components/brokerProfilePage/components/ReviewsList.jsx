import Review from "./Review";

export default function ReviewsList() {

    return(
        <div className="w-full bg-[#151516] border-[3px] rounded-t-[20px] border-[#252525] border-b-[#00818A] text-center text-white px-4 py-2 mb-10 overflow-y-hidden scroll-m-5 relative group">
            <div className="absolute inset-0 -top-[2px] object-cover w-[100%] h-[101%] bg-[#2D2D2D] bg-opacity-95 
                flex flex-col items-center justify-center px-3 border-[3px] rounded-t-[20px] border-[#252525] border-b-[#00818A] z-10
                transition-all transform 
                translate-y-8 opacity-0 
                group-hover:opacity-100 
                group-hover:translate-y-0">
                <h1 className="uppercase text-[#00818A] font-bold">Carrier Provided Reviews</h1>
                <p className="text-[0.8rem] text-center">Carriers are protected by anonymity if they choose, but are all manually verified for integrity.</p>                
            </div>
            <p className="absolute top-2 left-4 text-red-500 z-0 text-[1.25rem]">*</p>

            <div className="w-full flex justify-around pb-3">
                <h1 className="text-[1rem] lg:text-[1.25rem] font-thin tracking-tight">Carrier Provided Reviews</h1>
                <button className="border-[1px] border-[#00818A] px-2 text-[0.7rem] lg:text-[0.8rem] bg-transparent font-bold text-[#00818A] uppercase z-100">View All</button>
            </div>
            <Review name="Verified Anonymus Carrier" rating={4} description="Wow, best broker I've ever dealt with." />
            
        </div>
    )
}