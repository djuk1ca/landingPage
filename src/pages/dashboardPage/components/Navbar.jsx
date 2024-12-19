import { Link } from "react-router-dom"

export default function Navbar({username}){
    return(
        <nav className="flex justify-between items-center ml-10 mr-10 lg:mr-24 mt-8">
            <input className="w-1/2 lg:w-1/3 bg-transparent text-[#C1C1C1] text-sm border border-white rounded-full py-3 px-8  font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>
            <Link
                to="/account"
                className="text-sm py-3 px-6 rounded-sm border-yellow-300 border-[1px] bg-transparent uppercase text-yellow-300 font-thin">
                {username}
            </Link>
        </nav>
    )
}