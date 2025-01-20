import { useState } from "react"
import { Link } from "react-router-dom"

const links = <>
                <a href="" className="uppercase">broker profiling</a>
                <a href="" className="uppercase">FIle a report / dispute carrier report</a>
                <a href="" className="uppercase">blog</a>
                <a href="" className="uppercase">about us</a>
                <a href="" className="uppercase">contact us</a>
              </>

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="fixed block py-5 px-6 lg:px-12 z-50 w-screen">
                <div className="flex justify-between items-center w-full gap-8">
                    <Link to="/"><img src="/logoDark.png" alt="" width={200} className="hidden md:block" /></Link>
                    <div
                        className="absolute left-10 top-1/2 translate-y-[-50%] md:hidden"
                        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
                    >
                        <div className="flex flex-col gap-[0.35rem] w-[2rem]">
                            <span className="h-1 w-full rounded-full bg-white"></span>
                            <span className="h-1 w-full rounded-full bg-white"></span>
                            <span className="h-1 w-full rounded-full bg-white"></span>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-6 text-[0.75rem] text-white font-thin tracking-wide">
                        {links}
                    </div>
                    <Link to="/login" href="#" className="text-[0.8rem] lg:text-[1rem] py-3 px-4 lg:px-6 rounded-sm border-[1px] text-white font-thin border-white bg-transparent uppercase" >
                            60 day free trial
                    </Link>
                </div>
                <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } animate-dropDown bg-gradient-to-t from-[#151516] to-transparent  flex-col gap-1 text-white font-thin tracking-wide absolute top-full left-0 w-full py-0 px-6 pl-10 pb-4 border-b-[1px] border-[#333]`}
            >
                <div className="absolute w-full h-full blur-lg" />
                {links}
            </div>

        </div>

    )
}

export default Navbar
