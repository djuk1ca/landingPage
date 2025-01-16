import { Link } from "react-router-dom"
import logo from "./assets/logo.png"

export default function Navbar({username}){

    return(
        <nav className="w-screen flex justify-between items-center px-5  font-zenKaku py-6">
            <div className="flex w-2/3 gap-10 justify-start items-center">
                <Link to="/" className="hidden lg:block">
                    <img src={logo} width="50px" alt=""/>
                </Link>            
                <input className="w-max md:w-1/3 bg-transparent text-[#C1C1C1] text-sm border border-white rounded-full py-3 px-8  font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>
            </div>
            
            <Link
                to="/account"
                className="text-sm py-3 px-6 rounded-sm border-[#555555] border-[1px] bg-transparent uppercase text-[#B4B4B4] font-thin">
                {username}
            </Link>
        </nav>
    )
}