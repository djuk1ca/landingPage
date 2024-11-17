import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Braker from '../assets/braker.png'
import Info1 from './components/Info1'
import Info2 from './components/Info2'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function LandingPage() {

  return (
    <>
      <Navbar />
      <div className="font-zenKaku bg-[#151516] bg-pozadina overflow-x-hidden" >
        <Hero />
        <div className='bg-[#151516] w-full h-full opacity-100'>
          <img src={Braker} className='w-full' alt="grad" />
          <Info1 />
          <hr className="h-px w-[95%] m-auto border-0 bg-[#2D2D2D]"/>

          <Info2 />
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