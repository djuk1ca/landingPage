import Logo1 from '../../assets/logo.png'
//import Logo2 from '../../assets/logo1.png'
import Logo2 from '/logoDark.png'

export default function Hero({plansRef}){
    return(
        <div className='w-[90%] lg:w-4/5 m-auto h-screen flex items-center'>
          <div className='flex flex-col w-full h-full justify-center items-center lg:items-start gap-6 lg:gap-3 text-center lg:text-start'>
            <div className='w-[90%] lg:w-[35%] uppercase text-[2.8rem] lg:text-[3.5rem] leading-[3.2rem] font-bold text-white'>
              <p className='text-left'>try broker</p>
              <p className='text-right text-[#C4CB38]'>auditor for</p>
              <p className='text-left'>free</p>
            </div>
            <h1 className='text-center w-full lg:max-w-[60%] font-thin lg:text-left text-white text-[1rem] tracking-wide'>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.
            </h1>
            <button onClick={() => {
              if (plansRef.current) {
                plansRef.current.scrollIntoView({ behavior: 'smooth' });
              } else {
                console.error('plansRef is not attached to any element');
            }
            }}
            href="#plans" className="w-full lg:max-w-max text-[1.1rem] py-4 px-6 lg:px-8 border-[1px] text-[#efed0b] font-thin border-[#efed0b] backdrop-blur-sm uppercase rounded-sm" >
              view our plans
            </button>
          </div>
          
        </div>
    );
}