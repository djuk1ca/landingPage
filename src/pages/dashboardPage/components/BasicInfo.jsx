const num = 156

export default function BasicInfo(){
    return (
        <div className="flex flex-wrap gap-8 my-8 font-Inter justify-center lg:justify-normal">
            <div className="w-1/4 lg:w-1/6 text-center bg-gradient bg-cover bg-center text-white py-4 rounded-[1rem]">
                <p className="uppercase text-sm font-semibold px-2">brokers rated</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
            <div className="w-1/4 lg:w-1/6 text-center bg-gradient bg-cover bg-center text-white py-4 rounded-[1rem]">
                <p className="uppercase text-sm font-semibold px-2">Incidents reported</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
            <div className="w-1/4 lg:w-1/6 text-center bg-gradient bg-cover bg-center text-white py-4 rounded-[1rem]">
                <p className="uppercase text-sm font-semibold px-2">Interacted with</p>
                <p className="text-[17px] font-thin tracking-wide">{num}</p>
            </div>
        </div>
    )
}