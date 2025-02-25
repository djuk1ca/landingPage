import { Link } from "react-router-dom"
import logo from "/logoDark.png"

export default function Navbar({username}){

    return(
        <nav className="w-[90%] lg:w-4/5 m-auto flex justify-between items-center py-4" >
            <div className="flex w-2/3 gap-10 justify-start items-center">
                <Link to="/" className="hidden lg:block">
                    <img src={logo} width={200} alt=""/>
                </Link>            
                <input className="w-max md:w-1/3 bg-transparent text-[#C1C1C1] text-sm border border-white rounded-full py-3 px-8  font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>
            </div>
            
            <Link
                to={username ? "/account" : "/login"}
                className="text-sm py-3 px-6 rounded-sm border-[#555555] border-[1px] bg-transparent uppercase text-[#B4B4B4] font-thin">
                {username ? username : "Log In"}
            </Link>
        </nav>
    )
}