import Logo1 from '../../assets/logo.png'
//import Logo2 from '../../assets/logo1.png'
import Logo2 from '/logoDark.png'

export default function Hero(){
    return(
        <div className='w-screen h-screen overflow-hidden relative lg:pl-24'>
          <img src={Logo1} alt="logo1" className='lg:block hidden absolute h-[65rem] bottom-[-1rem] left-[74%] z-0 overflow-x-hidden'/>
          <div className='flex flex-col h-full justify-center gap-6 lg:block lg:ml-16 lg:mt-[15%] lg:max-w-[724px] max-w-screen columns-1 z-10 items-center text-center lg:text-start'>
            <img src={Logo2} alt="logo2" className='w-4/5 md:w-2/3 lg:w-auto lg:mb-6'/>
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className='text-center lg:w-full lg:text-left w-[80%] text-white text-[1.25rem] tracking-wide leading-5 lg:pb-0'>
              Bringing balance to the 3PL market, broker transparency is long overdue!
              </h1>
              <h2 className='text-center w-[80%] lg:mb-8 lg:text-left text-white text-[1rem] tracking-wide leading-4'>
              A platform that directly addresses broker abuses and fraud. Rate brokers across a variety of metrics: stop double brokering, fight back fraudulent reviews, bring light to unpaid/unfair charges.   
              </h2>
            </div>
            <button href='#' className="lg:ml-24 max-w-[80%] text-[1.1rem] py-4 px-6 lg:py-4 lg:px-8 rounded-sm border-[1px] text-[#efed0b] font-thin border-[#efed0b] bg-transparent uppercase" >
              create an account for free
            </button>
          </div>
        </div>
    );
}