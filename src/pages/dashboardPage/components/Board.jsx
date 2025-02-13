const brokerCompanies = [
    {
        name: "Broker Company Name",
        date: "16 SEP, 2024"
    },
    {
        name: "Broker Company Name",
        date: "16 SEP, 2024"
    },
    {
        name: "Broker Company Name",
        date: "16 SEP, 2024"
    },
]

export default function Board(){
    return(
        <div className="w-full flex flex-wrap gap-4 font-Inter justify-between">
            <div className="w-full lg:w-[30%] flex flex-row lg:flex-col gap-4  justify-between" >
                <div className="bg-[#212121] w-[47%] lg:w-full rounded-[1rem] uppercase text-[0.75rem]">
                    <div className="flex justify-between text-[#B6B6B6] text-sm font-bold py-4 px-4">
                        <h3>your portfolio</h3>
                        <a href="#" className="hidden lg:block">see all</a>
                    </div>
                    {brokerCompanies.map((item, index) => (
                        <div key={index} className="flex justify-between font-semibold py-3 px-4 hover:bg-[#353535] hover:rounded-[1rem]">
                            <h3 className="text-[#BECB45] text-left">{item.name}</h3>
                            <p className="text-[#666666] text-right">{item.date}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#212121] w-[47%] lg:w-full rounded-[1rem] uppercase text-[0.75rem]">
                    <div className="flex justify-between text-[#B6B6B6] text-sm font-bold py-4 px-4">
                        <h3>score changes</h3>
                        <a href="#" className="hidden lg:block">30 days</a>
                    </div>
                    {brokerCompanies.map((item, index) => (
                        <div key={index} className="flex justify-between font-semibold py-3 px-4 hover:bg-[#353535] hover:rounded-[1rem]">
                            <h3 className="text-[#BECB45] text-left">{item.name}</h3>
                            <p className="text-[#666666] text-right">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[47%] lg:w-[30%] flex flex-col items-center bg-[#212121] rounded-[1rem] uppercase">
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">Submit a new review</button>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold mb-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold mt-2">broker company name</p>
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">see all</button>
            </div>
            <div className="w-[47%] lg:w-[30%] flex flex-col items-center bg-[#212121] rounded-[1rem] uppercase">
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">Submit a new report</button>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-[#BECB45] text-[0.75rem] lg:text-sm font-semibold mb-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-[#FF5900] text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-[#FF5900] text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-[#FF5900] text-[0.75rem] lg:text-sm font-semibold my-2">broker company name</p>
                <p className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-[#BECB45] text-[0.75rem] lg:text-sm font-semibold mt-2">broker company name</p>
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">see all</button>
            </div>
        </div>
    )
}