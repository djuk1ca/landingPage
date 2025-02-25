import { useState } from "react"
import { Link } from "react-router-dom"

const links = <>
                <a href="/account" className="w-max uppercase transition ease-in duration-150 hover:text-[#C4CB38] pl-0 p-2">broker profiling</a>
                <a href="" className="w-max uppercase transition ease-in duration-150 hover:text-[#C4CB38] pl-0 p-2">FIle a report / dispute carrier report</a>
                <a href="" className="w-max uppercase transition ease-in duration-150 hover:text-[#C4CB38] pl-0 p-2">blog</a>
                <a href="" className="w-max uppercase transition ease-in duration-150 hover:text-[#C4CB38] pl-0 p-2">about us</a>
                <a href="" className="w-max uppercase transition ease-in duration-150 hover:text-[#C4CB38] pl-0 p-2">contact us</a>
              </>

const linksMobile = <>
                <a href="" className="w-full uppercase hover:underline py-1">broker profiling</a>
                <a href="" className="w-full uppercase hover:underline py-1">FIle a report / dispute carrier report</a>
                <a href="" className="w-full uppercase hover:underline py-1">blog</a>
                <a href="" className="w-full uppercase hover:underline py-1">about us</a>
                <a href="" className="w-full uppercase hover:underline py-1">contact us</a>
              </>

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="w-full fixed py-5 z-50 backdrop-blur-lg border-[#2D2D2D] border-b-[1px]">
                <div className="w-[90%] lg:w-4/5 m-auto flex justify-between items-center gap-8">
                    <Link to="/"><img src="/logoDark.png" alt="" width={200} className="hidden lg:block transition ease-in-out duration-150 hover:scale-105 min-w-32" /></Link>
                    <div
                        className="absolute top-1/2 translate-y-[-50%] lg:hidden"
                        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
                    >
                        <div className="flex flex-col gap-[0.35rem] w-[2rem]">
                            <span className="h-[2px] w-full rounded-full bg-white"></span>
                            <span className="h-[2px] w-full rounded-full bg-white"></span>
                            <span className="h-[2px] w-full rounded-full bg-white"></span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-6 text-[0.8vw] text-white font-thin tracking-wide">
                        {links}
                    </div>
                    <Link to="/register" href="#" className="text-[0.8rem] lg:text-[1rem] py-3 px-4 lg:px-6 backdrop-blur-md rounded-sm border-[1px] text-white font-thin text-center border-white uppercase transition ease-in-out duration-150 hover:border-[#C4CB38] hover:text-[#C4CB38]" >
                            60 day free trial
                    </Link>
                </div>
                <div className={`${menuOpen ? "flex" : "hidden"} 
                    animate-dropDown bg-[#151516]/40 backdrop-blur-lg flex-col gap-2 text-white tracking-wide 
                    absolute top-full left-0 w-full py-3 px-6 pb-4 border-b-[1px] border-[#333]`}>
                    {linksMobile}
                </div>
        </div>

    )
}

export default Navbar
