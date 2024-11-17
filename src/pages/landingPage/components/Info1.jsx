import VerticalBraker from '../../assets/vertical-braker-left.png'
import Page1Image from '../../assets/img1.png'

export default function Info1(){
    return(
        <div className='flex flex-col lg:flex-row m-24 lg:justify-between items-center sm:col-span-1'>
            <div className='block lg:w-[400px] w-full text-center lg:text-start'>
              <h1 className='uppercase font-black text-[3.5rem] text-white'>lorem ipsum</h1>
              <p className='uppercase text-[#DCDCDC] text-md lg:text-sm tracking-wide leading-12 mb-10'>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.
              </p>
              <a href='#' className="lg:ml-24 text-sm py-4 px-8 rounded-sm border-[2px] text-[#A1A732] font-extrabold border-[#A1A732] bg-transparent uppercase" >
              how we do it
              </a>
            </div>
            <img src={VerticalBraker} alt="braker" className='rotate-90 lg:rotate-0'/>
            <img src={Page1Image} alt="" width={400} className=''/>
          </div>
    )

}