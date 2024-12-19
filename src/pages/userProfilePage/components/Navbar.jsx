import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center mx-10  font-zenKaku py-2">
            <div className="flex w-1/2 gap-10 justify-between items-center">
                <Link to="/" className="hidden lg:flex justify-center items-center ml-2 my-2 h-16 gap-2">
                    <div className="w-[35px] h-[35px] rounded-full bg-[#FFEB00]"></div>
                    <h1 className="text-2xl text-[#FFEB00]">BA</h1>
                </Link>            
                <input className="w-3/4 lg:w-3/4 bg-transparent h-12 text-[#C1C1C1] text-sm border border-white rounded-full py-3 px-8  font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>

            </div>
            
            <Link
                to="/account"
                className="text-sm py-3 px-6 rounded-sm border-[#555555] border-[1px] bg-transparent uppercase text-[#B4B4B4] font-thin">
                your account
            </Link>
        </nav>
    )
}