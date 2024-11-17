export default function ActionHistory(){
    return (
        <div className="block container mt-6 font-Inter">
            <div className="flex justify-between ml-12 mr-3 mb-4 items-center">
                <h1 className="text-white text-xl font-thin tracking-wider font-zenKaku">Action History</h1>
                <button className="text-sm text-[#666666] uppercase font-bold hidden lg:block">see all</button>
            </div>
            <hr className="h-[1px] mb-4 border-0 rounded dark:bg-[#3F3F3F]"/>
            <div className="block container mb-12 text-[0.75rem] lg:text-base">
                <div className="flex justify-between text-[#666666] uppercase mb-4">
                    <p>#123456</p>
                    <p>Broker Company name</p>
                    <p>SEP 16, 2024</p>
                    <p>Incident report</p>
                    <p className="text-[#00FF1E] w-22">ACCEPTED</p>
                </div>
                <div className="flex justify-between text-[#666666] uppercase mb-4">
                    <p>#123456</p>
                    <p>Broker Company name</p>
                    <p>SEP 16, 2024</p>
                    <p>Incident report</p>
                    <p className="text-[#00FF1E] w-22">ACCEPTED</p>
                </div>
                <div className="flex justify-between text-[#666666] uppercase mb-4">
                    <p>#123456</p>
                    <p>Broker Company name</p>
                    <p>SEP 16, 2024</p>
                    <p>Incident report</p>
                    <p className="text-[#FF4548] w-22">DENIED</p>
                </div>
                
            </div>
        </div>
    )
}