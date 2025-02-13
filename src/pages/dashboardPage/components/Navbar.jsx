import { Link } from "react-router-dom"
import { PiSidebarSimpleThin } from "react-icons/pi";



export default function Navbar({username, handleSidebar}){
    return(
        <nav className="flex justify-between items-center px-6 lg:px-12 py-6">
            <div className="w-2/3 flex items-center gap-6">
                <button className="hover:scale-125 transition-all duration-300" onClick={handleSidebar}><PiSidebarSimpleThin size={50} color="white" /></button>
                <input className="w-full lg:w-1/2 bg-transparent text-[#C1C1C1] text-sm border border-white rounded-full py-3 px-8  font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>
            </div>
            <Link
                to="/account"
                className="text-sm py-3 px-6 rounded-sm border-yellow-300 border-[1px] bg-transparent uppercase text-yellow-300 font-thin">
                {username}
            </Link>
        </nav>
    )
}