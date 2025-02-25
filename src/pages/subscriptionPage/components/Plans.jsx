import PlanCard from "./PlanCard"

export default function Plans({plansRef}) {
    return(
        <div ref={plansRef} className="w-[90%] min-h-screen lg:w-4/5 m-auto bg-[151516] py-12 text-center">
            <h1 className="w-[90%] lg:w-[35%] m-auto text-center uppercase text-[3.5rem] lg:text-[4.5rem] leading-[2.5rem] lg:leading-[3.4rem] font-bold text-white">pricing <br /> <span className="text-[#C4CB38]">plans</span></h1>
            <p className="w-full lg:w-[60%] font-thin text-white text-center m-auto mt-2 uppercase">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.</p>
            <div className="w-full lg:w-[80%] m-auto flex flex-col lg:flex-row items-center justify-between gap-12 mt-12">
                <PlanCard name={"TRIAL"} price={"FREE"} duration={"14 days"} invert={false} />
                <PlanCard name={"BASIC"} price={"$89.99"} duration={"mo"} invert={true} />
                <PlanCard name={"PRO"} price={"$189.99"} duration={"mo"} invert={false} />
            </div>
        </div>
    )
}