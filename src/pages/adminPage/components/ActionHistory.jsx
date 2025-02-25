export default function ActionHistory(){
    return (
        <div className="mt-6 font-Inter">
            <div className="flex justify-between mb-4 items-center">
                <h1 className="text-white text-xl font-thin tracking-wider font-zenKaku">Action History</h1>
                <button className="text-sm text-[#666666] uppercase font-bold block">see all</button>
            </div>
            <hr className="h-[1px] mb-4 border-0 rounded dark:bg-[#3F3F3F]"/>
            <div className="mb-12 text-[2vw] md:text-[1rem]">
                

                <div className="grid grid-cols-5 text-[#666666] uppercase mb-2">
                    <p>#123456</p>
                    <p>Broker Company Name</p>
                    <p className="text-center">SEP 16, 2024</p>
                    <p className="text-center">Incident Report</p>
                    <p className="text-[#00FF1E] text-right">ACCEPTED</p>
                </div>

                <div className="grid grid-cols-5 text-[#666666] uppercase mb-2">
                    <p>#123456</p>
                    <p>Broker Company Name</p>
                    <p className="text-center">SEP 16, 2024</p>
                    <p className="text-center">Incident Report</p>
                    <p className="text-[#00FF1E] text-right">ACCEPTED</p>
                </div>

                <div className="grid grid-cols-5 text-[#666666] uppercase mb-2">
                    <p>#123456</p>
                    <p>Broker Company Name</p>
                    <p className="text-center">SEP 16, 2024</p>
                    <p className="text-center">Incident Report</p>
                    <p className="text-[#FF4548] text-right">DENIED</p>
                </div>
            </div>
        </div>
    )
}