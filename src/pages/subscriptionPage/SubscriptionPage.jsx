import Navbar from "../landingPage/components/Navbar"
import Hero from "./components/Hero"
import Braker from '../assets/braker.png'
import Footer from "../landingPage/components/Footer"
import Plans from "./components/Plans"

import { useRef } from "react"

export default function SubscriptionPage() {
    const plansRef = useRef();
    
    return(
        <>
            <Navbar />
            <div className="bg-pozadina bg-cover bg-center w-full ">
                <Hero plansRef={plansRef}/>
                <div className='bg-[#151516] w-full h-full opacity-100'>
                    <img src={Braker} className='w-full' alt="grad" />
                    <Plans plansRef={plansRef}/>

                    <hr className="h-px w-full m-auto border-0 bg-[#2D2D2D]"/>
                    <Footer />
                </div>
            </div>
        </>
    )
}