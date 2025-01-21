
export default function ComingSoon() {

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="w-[90%] lg:w-4/5 py-6 m-auto text-white text-center">
            <h1 className="mb-6 text-[2.5rem] font-bold">Features Coming Soon</h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-between font-thin">
                <div className="bg-pozadina bg-cover bg-center h-[50vh] lg:h-[40vh] flex flex-col items-start text-left justify-between gap-3 p-4 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h1 className="text-[1.5rem]">Consolidation Visualizer</h1>
                        <p className="text-[1rem]">Plan different freight sizes, trips, and weights on one convenient interface for your trailer</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>
                
                <div className="bg-pozadina bg-cover bg-center h-[50vh] lg:h-[40vh] flex flex-col items-start text-left justify-between gap-3 p-4 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h1 className="text-[1.5rem]">Fleet Management + TMS Integration</h1>
                        <p className="text-[1rem]">Build and manage your fleet: Tankers, Vans, Reefers, etc.. Set dimensions custom to your equipment.</p>
                        <p className="text-[1rem]">Complete end of trip prompts to feed accurate broker data into Broker Auditor.</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>

                <div className="bg-pozadina bg-cover bg-center h-[50vh] lg:h-[40vh] flex flex-col items-start text-left justify-between gap-3 p-4 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h1 className="text-[1.5rem]">Route Planning</h1>
                        <p className="text-[1rem]">Plan congruent trips, our tools help tackle route planning, appointment inconsistencies & laws by state.</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>

                <div className="bg-pozadina bg-cover bg-center flex flex-col items-start text-left justify-between gap-3 p-4 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h1 className="text-[1.5rem]">Subscribe to newsletter form</h1>
                        <p className="text-[1rem]">Subscribe for the latest feature updates and industry news:</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-2 items-start' action="">
                        <input type="email" className='bg-[#151516] w-full px-4 py-2 outline-none border-2 border-[#2D2D2D] placeholder-neutral-400 text-white transition-[border] duration-300 focus:border-[#333]' placeholder='Email:'/>
                        <button type='submit' className='bg-[#151516] py-2 w-full text-neutral-400 font-semibold border-2 border-[#2D2D2D] transition-[border] duration-300 hover:border-[#333] uppercase'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}