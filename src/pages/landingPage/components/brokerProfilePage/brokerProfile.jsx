import Navbar from "../Navbar";

import Reputation from "./components/Reputation";
import Factoring from "./components/Factoring";
import VerifiedIncidents from "./components/VerifiedIncidents";
import QuickReview from "./components/QuickReview";
import BasicInfo from "./components/BasicInfo";
import ReviewsList from "./components/ReviewsList";

export default function BrokerProfile() {
    return (
        <div className="bg-pozadina bg-cover bg-[#151516] w-full h-max font-zenKaku border-2 border-[#2D2D2D] pb-4">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="flex flex-wrap items-center justify-between w-full">
                <div className="w-full lg:w-1/2 px-10 flex flex-col items-center mt-8">
                    <BasicInfo />
                    <div className="bg-map bg-cover bg-center relative block group w-3/4 h-[35vh] mt-10 rounded-[1rem]">
                        <div className="absolute inset-0 object-cover w-full h-full bg-[#2D2D2D] bg-opacity-95 
                                flex flex-col items-center justify-center px-3 rounded-[1rem] z-10
                                transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                            <h1 className="uppercase text-[#00818A] font-bold">Map:</h1>
                            <p className="text-[0.8rem] text-center text-white">Instant Google Map Access</p>
                        </div>
                        <p className="absolute top-3 right-5 text-red-500 z-0 text-[1.25rem]">*</p>

                    </div>
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
