import Logo from '../../assets/logo.png'
import { SocialIcon } from 'react-social-icons'


export default function Footer(){

    function handleSubmit(e){
        e.preventDefault();
    }

    return(

        <footer className="flex flex-wrap flex-row gap-6 py-12 text-white w-full justify-around lg:items-center text-center font-thin">
            <div className='flex flex-col w-4/5 lg:w-1/5 items-center lg:items-start lg:text-left gap-2'>
                <img src="/logoDark.png" width={150} alt="logo" />
                <p>Accountability for brokers, clarity for carriers.</p>
                <p className='font-semibold'>support@brokerauditor.com</p>
                <div className='flex justify-center lg:justify-normal w-full'>
                    <SocialIcon url='https://www.facebook.com' width={150} network="facebook" bgColor="#151516" />
                    <SocialIcon url='https://www.youtube.com' network="youtube" bgColor="#151516" />
                    <SocialIcon url='https://www.x.com' network="x" bgColor="#151516" />
                    <SocialIcon url='https://www.instagram.com' network="instagram" bgColor="#151516" />
                </div>
            </div>
            <div className='flex w-max flex-col items-start lg:items-center font-thin tracking-wide gap-2 uppercase text-left'>
                <a className='hover:font-semibold' href="">Broker Profile</a>
                <a className='hover:font-semibold' href="">Customer Reviews</a>
                <a className='hover:font-semibold' href="">Report a Broker</a>
                <a className='hover:font-semibold' href="">Blog</a>
                <a className='hover:font-semibold' href="">About Us</a>
                <a className='hover:font-semibold' href="">Contact Us</a>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col w-2/5 lg:w-1/5 gap-2 items-end text-right' action="">
                <label htmlFor="email">Subscribe for the latest feature updates and industry news:</label>
                <input type="email" className='w-full text-left lg:text-right px-4 py-2 outline-none bg-transparent border-2 border-[#2D2D2D] text-white transition-[border] duration-300 focus:border-[#333]' placeholder='Email:'/>
                <button type='submit' className='px-4 py-2 border-2 border-[#2D2D2D] transition-[border] duration-300 hover:border-[#333] uppercase'>Submit</button>
            </form>
        </footer>
    )
}

/*
<div className='flex w-1/2 lg:w-auto'>
                <SocialIcon url='https://www.facebook.com' network="facebook" bgColor="#151516" />
                <SocialIcon network="youtube" bgColor="#151516" />
                <SocialIcon network="twitter" bgColor="#151516" />
                <SocialIcon network="instagram" bgColor="#151516" />
            </div>
            */