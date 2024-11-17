import VerticalBraker from '../../assets/vertical-braker-right.png'
import Page2Image from '../../assets/img2.png'

export default function Info2(){
    return(
        <div className='flex flex-col lg:flex-row m-24 lg:justify-between justify-normal items-center sm:col-span-1'>
            <img src={Page2Image} alt="" width={400} className=''/>
            <img src={VerticalBraker} alt="braker" className='rotate-90 lg:rotate-0'/>
            <div className='block lg:w-[400px] w-full text-center lg:text-end'>
              <h1 className='uppercase font-black text-[3.5rem] text-white'>lorem ipsum</h1>
              <p className='uppercase text-[#DCDCDC] text-md lg:text-sm tracking-wide leading-8 mb-10'>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.
              </p>
              <a href='#' className="lg:mr-24 text-sm py-4 px-8 rounded-sm border-[2px] text-[#A1A732] font-extrabold border-[#A1A732] bg-transparent uppercase" >
              how we do it
              </a>
            </div>
          </div>
    )

}