import Logo1 from '../../assets/logo.png'
//import Logo2 from '../../assets/logo1.png'
import Logo2 from '/logoDark.png'

export default function Hero(){
    return(
        <div className='w-[90%] lg:w-4/5 m-auto h-screen flex items-center'>
          <div className='flex flex-col w-full h-full justify-center gap-6 lg:gap-0 text-center lg:text-start'>
            <img src={Logo2} alt="logo2" className='w-full lg:w-2/3 lg:mb-3'/>
            <div className='flex flex-col w-full items-center lg:items-start'>
              <h2 className='text-center lg:w-max lg:text-left text-white text-[1.25rem] tracking-wide'>
              Bringing balance to the 3PL market, broker transparency is long overdue!
              </h2>
              <h1 className='text-center w-full lg:max-w-[80%] lg:mb-8 lg:text-left text-white text-[1rem] tracking-wide'>
              A platform that directly addresses broker abuses and fraud. Rate brokers across a variety of metrics: stop double brokering, fight back fraudulent reviews, bring light to unpaid/unfair charges.   
              </h1>
            </div>
            <button href='#' className="w-full lg:max-w-max text-[1.1rem] py-4 px-6 lg:px-8 border-[1px] text-[#efed0b] font-thin border-[#efed0b] backdrop-blur-sm uppercase rounded-sm transition duration-300 ease-in-out hover:scale-110" >
              create an account for free
            </button>
          </div>
          <div className='hidden lg:block h-1/2 w-2/3 bg-gradient-to-b rounded-lg from-[#065967] to-[#dde26e] drop-shadow-2xl' />
        </div>
    );
}