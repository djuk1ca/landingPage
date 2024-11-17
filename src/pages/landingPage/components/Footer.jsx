import Logo from '../../assets/logo.png'
import { SocialIcon } from 'react-social-icons'


export default function Footer(){
    return(

        <div className="flex flex-wrap lg:flex-row  py-12 px-36 text-white w-full justify-between items-center text-center">
            <p  className='w-1/2 lg:w-auto'><span className="font-thin">©2024</span> <span className="font-black ">Broker Auditor</span></p>
            <div className='w-1/2 lg:w-auto'>
                <h3 className='font-bold'>Links</h3>
                <a href='#'>Test Link 1</a><br />
                <a href='#'>Test Link 2</a><br />
                <a href='#'>Test Link 3</a><br />
                <a href='#'>Test Link 4</a><br />
            </div>
            <img src={Logo} alt="" className='lg:w-10 h-10 hidden lg:block' />
            <div className='w-1/2 lg:w-auto'>
                <h3 className='font-bold'>Links</h3>
                <a href='#'>Test Link 1</a><br />
                <a href='#'>Test Link 2</a><br />
                <a href='#'>Test Link 3</a><br />
                <a href='#'>Test Link 4</a><br />
            </div>
            <div className='flex w-1/2 lg:w-auto'>
                <SocialIcon url='https://www.facebook.com' network="facebook" bgColor="#151516" />
                <SocialIcon network="youtube" bgColor="#151516" />
                <SocialIcon network="twitter" bgColor="#151516" />
                <SocialIcon network="instagram" bgColor="#151516" />
            </div>
        </div>
    )
}