import Navbar from "../Navbar";
import Map from "../assets/dark-map.png";
import Reputation from "./components/Reputation";
import Factoring from "./components/Factoring";
import VerifiedIncidents from "./components/VerifiedIncidents";
import QuickReview from "./components/QuickReview";
import BasicInfo from "./components/BasicInfo";
import { FaStar } from "react-icons/fa"

export default function BrokerProfile() {
    const n = 4;
    return (
        <div className="bg-pozadina bg-[#151516] w-screen h-screen font-zenKaku">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="flex flex-col lg:flex-row items-center w-full">
                <div className="w-full lg:w-1/2 px-10 flex flex-col items-center mt-8">
                    <BasicInfo />
                    <img src={Map} className="hidden lg:block w-3/4" alt="" />
                </div>
                <div className="w-full lg:w-1/2 pr-32 flex flex-col items-center mt-8 ml-16">
                    <div className="flex gap-8 w-full">
                        <Reputation />
                        <Factoring />
                    </div>
                    <div className="flex gap-8 mt-8 w-full">
                        <VerifiedIncidents />
                        <QuickReview />
                    </div>
                    <div className="w-full bg-[#151516] mt-8 border-[3px] rounded-t-[20px] border-[#252525] border-b-[#00818A] text-center text-white px-4 py-2 h-40 overflow-y-auto scroll-smooth scroll">
                        <h1 className="text-[1.5rem]">Carrier Provided Reviews</h1>
                        <div className="bg-[#212121] rounded-2xl px-3 py-2 text-sm text-start mb-4">
                            <div className="flex justify-start items-center gap-5 mb-3">
                                <p>Anonymous Carrier</p>
                                <div className="flex gap-1">
                                    {[...Array(n)].map((star, index) => (
                                        <FaStar key={index} color="#00818A" />
                                    ))}
                                </div>
                            </div>
                            <p>Wow, best broker I've ever dealt with.</p>
                        </div>
                        <div className="bg-[#212121] rounded-2xl px-3 py-2 text-sm text-start">
                            <div className="flex justify-start items-center gap-5 mb-3">
                                <p>Anonymous Carrier</p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((star, index) => (
                                        <FaStar key={index} color="#00818A" />
                                    ))}
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
