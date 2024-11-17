import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="fixed top-5 z-50 py-3 w-full">
            <div className="relative w-full">
                <div className="flex justify-between items-center gap-8">
                    <div className="lg:ml-[30%] lg:mr-0 sm: ml-4 flex gap-3 sm:gap-5 lg:text-[12px] text-[10px] text-[#DCDCDC] font-thin tracking-wide">
                        <a href="" className="uppercase">broker snaphots</a>
                        <a href="" className="uppercase">report broker</a>
                        <a href="" className="uppercase">dispute carrier report</a>
                        <a href="" className="uppercase">customer contact directory</a>
                    </div>
                    <Link to="/login" href="#" className="lg:text-md sm:text-sm mr-4 sm:py-2 sm:px-4 lg:py-3 lg:px-6 rounded-sm border-[1px] text-[#B4B4B4] font-thin border-[#555555] bg-transparent uppercase" >
                            60-day-free-trial
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Navbar