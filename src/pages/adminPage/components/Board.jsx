const latestBrokers = [
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        date: "16 SEP, 2024"
    },
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        date: "16 SEP, 2024"
    },
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        date: "16 SEP, 2024"
    },
]

const latestPlanPuchases = [
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        plan: "PRO PLAN",
        price: "89.99$",
        date: "16 SEP, 2024"
    },
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        plan: "BASIC PLAN",
        price: "69.99$",
        date: "16 SEP, 2024"
    },
    {
        email: "JOHNMITCHEL@GMAIL.COM",
        plan: "PRO PLAN",
        price: "89.99$",
        date: "16 SEP, 2024"
    }
]

const highestRateBrokers = ["Broker 1", "Broker 2", "Broker 3", "Broker 4", "Broker 5", "Broker 6",]

export default function Board(){
    return(
        <div className="w-full flex flex-wrap gap-4 font-Inter justify-between">
            <div className="w-full lg:w-[30%] flex flex-row lg:flex-col gap-2  justify-between" >
                <div className="bg-[#212121] w-[47%] lg:w-full rounded-[1rem] uppercase text-[0.75rem]">
                    <div className="flex justify-between text-[#B6B6B6] text-sm font-bold py-4 px-4">
                        <h3>latest registered</h3>
                        <a href="#" className="hidden lg:block">see all</a>
                    </div>
                    {latestBrokers.map((item, index) => (
                        <div key={index} className="flex justify-between font-semibold py-3 px-4 hover:bg-[#353535] hover:rounded-[1rem]">
                            <h3 className="text-[#BECB45] text-left">{item.email}</h3>
                            <p className="text-[#666666] text-right">{item.date}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#212121] w-[47%] lg:w-full rounded-[1rem] uppercase text-[0.75rem]">
                    <div className="flex justify-between text-[#B6B6B6] text-sm font-bold py-4 px-4">
                        <h3>latest plan purchases</h3>
                        <a href="#" className="hidden lg:block">30 days</a>
                    </div>
                    {latestPlanPuchases.map((item, index) => (
                        <div key={index} className="flex justify-between font-semibold py-3 px-4 hover:bg-[#353535] hover:rounded-[1rem]">
                            <h3 className="text-[#BECB45] text-left">{item.email[0] + "***@" + item.email.split("@")[1]} - {item.plan} - {item.price}</h3>
                            <p className="text-[#666666] text-right">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-[30%] flex flex-col items-center bg-[#212121] rounded-[1rem] uppercase">
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">Highest rated brokers</button>
                {highestRateBrokers.map((item, index) => (
                    <p key={index} className="py-3 bg-[#353535] w-[90%] text-center rounded-[9px] text-white text-[0.75rem] lg:text-sm font-semibold mb-2">{item}</p>
                ))}
                <button className="text-sm text-[#B6B6B6] uppercase py-4 font-bold">see all</button>
            </div>

            <div className="w-full lg:w-[30%] flex flex-col justify-between items-center uppercase">
                <form className="bg-[#212121] w-full h-[30%] rounded-[1rem] flex-col gap-3 items-center text-center px-4 py-2 text-[#B6B6B6]">
                    <h2 className="text-center">EDIT A BROKER</h2>
                    <input type="text" className="w-full mt-2 rounded-lg bg-[#353535] outline-none px-5 py-2 text-[0.75rem] uppercase placeholder-[#7B7B7B] text-[#7B7B7B] font-bold" name="broker"  placeholder="broker or report id..."/>
                    <button type="submit" className="border-2 text-center text-[1rem] font-bold mt-2 uppercase border-[#BECB45] text-[#C1C1C1] w-1/4 py-1">edit</button>
                </form>
                <form className="bg-[#212121] w-full h-[30%] rounded-[1rem] flex-col gap-3 items-center text-center px-4 py-2 text-[#B6B6B6]">
                    <h2 className="text-center">EDIT A REVIEW OR A REPORT</h2>
                    <input type="text" className="w-full mt-2 rounded-lg bg-[#353535] outline-none px-5 py-2 text-[0.75rem] uppercase placeholder-[#7B7B7B] text-[#7B7B7B] font-bold" name="review"  placeholder="REVIEW OR A REPORT ID..."/>
                    <button type="submit" className="border-2 text-center text-[1rem] font-bold mt-2 uppercase border-[#BECB45] text-[#C1C1C1] w-1/4 py-1">edit</button>
                </form>
                <form className="bg-[#212121] w-full h-[30%] rounded-[1rem] flex-col gap-3 items-center text-center px-4 py-2 text-[#B6B6B6]">
                    <h2 className="text-center">EDIT A USER</h2>
                    <input type="text" className="w-full mt-2 rounded-lg bg-[#353535] outline-none px-5 py-2 text-[0.75rem] uppercase placeholder-[#7B7B7B] text-[#7B7B7B] font-bold" name="user"  placeholder="EMAIL OR USER ID..."/>
                    <button type="submit" className="border-2 text-center text-[1rem] font-bold mt-2 uppercase border-[#BECB45] text-[#C1C1C1] w-1/4 py-1">edit</button>
                </form>
            </div>
        </div>
    )
}