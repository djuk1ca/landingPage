
import { useState } from "react";

export default function ComingSoon() {
    const [errors, setErrors] = useState({});



    function handleSubmit(e){
        const form = e.target;
        const newErrors = {};

        if (!form.email.value.trim()) {
            newErrors.email = "You must enter an email.";
        }

        setErrors(newErrors);

        e.preventDefault();
    }

    return(
        <div className="w-[90%] lg:w-4/5 py-16 m-auto text-white text-center">
            <h2 className="mb-6 text-[2.5rem] font-bold">Features <span className="text-[#C4CB38]">Coming Soon</span></h2>
            <div className="flex flex-wrap flex-col lg:flex-row gap-4 justify-between font-thin">
                <div className="w-full lg:w-[30%] bg-pozadina bg-cover bg-center h-[50vh] lg:h-[70vh] flex flex-col items-start text-left justify-between gap-3 p-10 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h3 className="text-[1.5rem]">Consolidation Visualizer</h3>
                        <p className="text-[1.1rem]">Plan different freight sizes, trips, and weights on one convenient interface for your trailer</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>
                
                <div className="w-full lg:w-[30%] bg-pozadina bg-cover bg-center h-[50vh] lg:h-[70vh] flex flex-col items-start text-left justify-between gap-3 p-10 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h3 className="text-[1.5rem]">Fleet Management + TMS Integration</h3>
                        <p className="text-[1.1rem]">Build and manage your fleet: Tankers, Vans, Reefers, etc.. Set dimensions custom to your equipment.</p>
                        <p className="text-[1.1rem]">Complete end of trip prompts to feed accurate broker data into Broker Auditor.</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>

                <div className="w-full lg:w-[30%] bg-pozadina bg-cover bg-center h-[50vh] lg:h-[70vh] flex flex-col items-start text-left justify-between gap-3 p-10 rounded-lg border-[1px] border-[#2D2D2D]">
                    <div>
                        <h3 className="text-[1.5rem]">Route Planning</h3>
                        <p className="text-[1.1rem]">Plan congruent trips, our tools help tackle route planning, appointment inconsistencies & laws by state.</p>
                    </div>
                    <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-[#065967] to-[#dde26e]" />
                </div>

                <div className="w-full lg:mt-8 bg-pozadina bg-cover bg-center flex flex-col items-start text-left justify-between gap-3 p-10 rounded-[2rem] border-[1px] border-[#2D2D2D]">
                    <div className="text-center w-full">
                        <h3 className="text-[1.5rem] font-bold text-white">Subscribe for the Latest Feature Updates and Industry News</h3>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row w-full gap-2 items-center' action="">
                        <div className="w-full md:w-[80%] text-center">
                            <input type="email" name="email" className={`bg-[#151516] w-full px-4 py-2 outline-none border-2 border-[#2D2D2D] placeholder-neutral-400 text-white transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]
                              ${errors.email ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'}  `} placeholder='Email:'/>
                        </div>
                        <button type='submit' className='bg-[#151516] py-2 w-full md:w-[20%] text-neutral-400 font-semibold border-2 border-[#2D2D2D] transition ease-in duration-150 hover:text-[#C4CB38] hover:border-[#C4CB38] uppercase'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}