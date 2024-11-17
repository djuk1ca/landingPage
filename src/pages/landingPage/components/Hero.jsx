import Logo1 from '../../assets/logo.png'
import Logo2 from '../../assets/logo1.png'

export default function Hero(){
    return(
        <div className='h-screen overflow-hidden relative'>
          <img src={Logo1} alt="logo1" className='lg:block hidden absolute h-[65rem] bottom-[-1rem] left-[74%] z-0 overflow-x-hidden'/>
          <div className='flex flex-col lg:block lg:ml-16 m-auto pt-36 lg:max-w-[724px] max-w-screen columns-1 z-10 items-center text-center lg:text-start'>
            <img src={Logo2} alt="logo2" className='w-2/3 lg:w-auto ml-8 lg:ml-0'/>
            <h3 className='mx-4 uppercase text-center lg:w-full w-[80%] text-[#DCDCDC] text-sm tracking-wide leading-8 pb-16 lg:pb-0'>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.
            </h3>
            <br />
            <a href='#' className="lg:ml-24 text-lg lg:text-sm py-6 px-12 lg:py-4 lg:px-8 rounded-sm border-[2px] text-[#A1A732] font-extrabold border-[#A1A732] bg-transparent uppercase" >
              how we do it
            </a>
          </div>
        </div>
    );
}