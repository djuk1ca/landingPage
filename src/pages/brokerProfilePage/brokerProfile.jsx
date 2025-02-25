import Navbar from "../Navbar";
import Map from "../assets/dark-map.png";
import Reputation from "./components/Reputation";
import Factoring from "./components/Factoring";
import VerifiedIncidents from "./components/VerifiedIncidents";
import QuickReview from "./components/QuickReview";
import BasicInfo from "./components/BasicInfo";
import ReviewsList from "./components/ReviewsList";

export default function BrokerProfile() {
    return (
        <div className="bg-pozadina bg-cover bg-[#151516] h-max lg:h-screen font-zenKaku">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="flex flex-wrap items-center justify-between w-full">
                <div className="w-full lg:w-1/2 px-10 flex flex-col items-center">
                    <BasicInfo />
                    <img src={Map} className="block w-3/4 mt-10" alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-wrap flex-col gap-8 items-center justify-center mt-8 px-12">
                    <div className="flex justify-between gap-8 flex-wrap w-full">
                        <Reputation />
                        <Factoring />
                    </div>
                    <div className="flex justify-between gap-8 flex-wrap w-full">
                        <VerifiedIncidents />
                        <QuickReview />
                    </div>
                    <ReviewsList />
                </div>
            </div>
            
        </div>
    );
}
