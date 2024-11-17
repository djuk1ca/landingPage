import sidebarBreaker from "../../assets/sidebarBreaker.png"
import { Link } from "react-router-dom"

const brokers = ["Broker 1", "Broker 1", "Broker 1", "Broker 1", "Broker 1"]

export default function Sidebar(){
    return(
        <div className="lg:flex min-h-screen font-zenKaku hidden fixed">
            <div className="block text-center">
                <Link to="/" className="flex justify-center items-center h-24 w-24 mx-16 gap-2 ">
                        <div className="w-[30px] h-[30px] rounded-full bg-yellow-300"></div>
                        <h1 className="text-2xl text-yellow-300">BA</h1>
                </Link>
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