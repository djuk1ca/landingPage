import sidebarBreaker from "../../assets/sidebarBreaker.png"
import { Link } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";


const brokers = ["Broker 1", "Broker 2", "Broker 3", "Broker 4", "Broker 5"]

export default function Sidebar({sidebarOpen, handleSidebar}){
    return(
        <div className={`${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" } flex transition-all ease-in-out duration-500 fixed bg-[#151516] min-h-screen z-10`}>
            <div className="block text-center">
                <div className=" flex gap-2 justify-between items-center mx-8 my-12">
                    <button onClick={handleSidebar} className="hover:scale-125 transition-all duration-300"><IoCloseOutline color="white" size={50} /></button>
                    <img src="/logoDark.png" width={200} alt="" />
                </div>
                <div className="mb-10">
                    <h3 className="w-[90%] bg-[#252525] text-white rounded-md font-thin mx-auto tracking-wider py-2 text-sm">Saved Brokers</h3>
                    <ul className="mt-4 flex flex-col items-center">
                        {brokers.map((item, index) => (
                            <a href="#" key={index} className="flex items-center gap-3 mr-8 mt-3">
                                <div className="w-[12px] h-[12px] rounded-full bg-[#252525]"></div>
                                <li key={index} className="text-white font-thin tracking-wider">{item}</li>
                            </a>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="w-[90%] bg-[#252525] text-white rounded-md font-thin mx-auto tracking-wider py-2 text-sm">Saved Brokers</h3>
                    <ul className="mt-4 flex flex-col items-center">
                        {brokers.map((item, index) => (
                            <a href="#" key={index} className="flex items-center gap-3 mr-8 mt-3">
                                <div className="w-[12px] h-[12px] rounded-full bg-[#252525]"></div>
                                <li key={index} className="text-white font-thin tracking-wider">{item}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <img src={sidebarBreaker} className="h-screen"/>
        </div>
    )
}