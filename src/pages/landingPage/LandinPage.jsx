import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Braker from '../assets/braker.png'
import NewsSection from './components/NewsSection'
import InfoSection from './components/InfoSection'
import BrokerPage from './components/BrokerPage'
import Subsection from './components/Subsection'
import FourthSection from './components/FourthSection'
import ContactSection from './components/ContactSection'
import ComingSoon from './components/ComingSoon'
import Info1 from './components/Info1'
import Info2 from './components/Info2'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function LandingPage() {

  return (
    <>
    {/*from-[#065967] to-[#dde26e] GRADIENT*/}
      <Navbar />
      <div className="font-zenKaku bg-[#151516] bg-pozadina overflow-x-hidden" >
        <Hero />
        <div className='bg-[#151516] w-full h-full opacity-100'>
          <img src={Braker} className='w-full' alt="grad" />
          <NewsSection />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <InfoSection />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <BrokerPage />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          
          <Subsection />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <FourthSection />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <ContactSection />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <ComingSoon />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <Cards />
          <br />
          <br />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>
          <Footer />

        </div>
      </div>

        
  
    </>
  )
}