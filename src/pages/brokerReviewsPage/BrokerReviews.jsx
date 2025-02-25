import Navbar from "../Navbar"
import ReviewsList from "./components/ReviewsList"
import BasicInfo from "./components/BasicInfo"
import Footer from "./components/Footer"

export default function BrokerReviews() {
    return (
        <div className="bg-pozadina bg-cover bg-[#151516] min-h-screen w-full">
            <Navbar username={localStorage.getItem("username")} />
            <div className="w-[90%] lg:w-4/5 m-auto">
                <BasicInfo />
                <ReviewsList />
            </div>
            <hr className="h-px w-full m-auto border-0 bg-[#2D2D2D]"/>
            <div className="w-full bg-[#151516]">
                <Footer />  

            </div>

        </div>
    )
}