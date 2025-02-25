const num = 156

export default function BasicInfo(){
    return (
        <div className="flex gap-8 py-8 font-Inter justify-between lg:justify-start ">
            <div className="w-[30%] lg:w-1/6 text-center bg-gradient-to-r from-[#065967] to-[#dde26e] text-white py-4 rounded-[1rem]">
                <p className="uppercase text-[70%] font-semibold px-2">Users Registered</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
            <div className="w-[30%] lg:w-1/6 text-center bg-gradient-to-r from-[#065967] to-[#dde26e] text-white py-4 rounded-[1rem]">
                <p className="uppercase text-[70%] font-semibold px-2">Total Incidents</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
            <div className="w-[30%] lg:w-1/6 text-center bg-gradient-to-r from-[#065967] to-[#dde26e] text-white py-4 rounded-[1rem]">
                <p className="uppercase text-[70%] font-semibold px-2">Total Reviews</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
        </div>
    )
}