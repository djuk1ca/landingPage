import Marquee from 'react-fast-marquee'
import img1 from "../../assets/cards/card1.png";
import img2 from "../../assets/cards/card2.png";
import img3 from "../../assets/cards/card3.png";
import img4 from "../../assets/cards/card4.png";
import img5 from "../../assets/cards/card5.png";

const cards = [
    img1,
    img2,
    img3,
    img4,
    img5
]

export default function Cards(){
    return(
        <div className="block w-full text-center mt-12">
            <h1 className='uppercase font-black text-[3.5rem] text-white leading-none py-8'>users that <br /> <span className="text-[#C4CB38]">trust us</span></h1>
            
            <p className='uppercase text-[#DCDCDC] text-md lg:text-sm tracking-wide leading-12 mb-10 lg:mx-96'>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt sem.  
            </p>
            <div className='overflow-x-hidden'>
                <Marquee className='w-screen pb-40'>
                    <div className="flex gap-3 mr-3">
                        {cards.map((item, index) => (
                            <img src={item} alt={index} key={index} />
                        ))}
                    </div>
                </Marquee>
            </div>
            </div>       
    )
}