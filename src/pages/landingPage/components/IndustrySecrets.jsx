import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const news = [
    {
        imageUrl: "/gradient.png",
        title: "title-1",
        description: "lorem ipsum dolor mitasdasd sadasda sdasdas amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-2",
        description: "lorem ipsum dolor mit amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-3",
        description: "lorem ipsum dolor mit amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-4",
        description: "lorem ipsum dolor mit amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-5",
        description: "lorem ipsum dolor mit amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-6",
        description: "lorem ipsum dolor mit amet"
    },
    {
        imageUrl: "/gradient.png",
        title: "title-7",
        description: "lorem ipsum dolor mit amet"
    },
];

export default function IndustrySecrets() {
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        cssEase: "ease-in-out",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    }

    return (
        <div className="py-16 pt-14 w-[85%] lg:w-4/5 m-auto">
            <h1 className='text-center font-black text-[2.5rem] text-white mb-4'>Industry Secrets Every Carrier <span className="text-[#C4CB38]">Should Know</span></h1>
 
            <Slider {...sliderSettings} >
                {news.map((item, key) => (
                    <div key={key} className="w-full lg:w-[30%] bg-pozadina bg-cover bg-center h-[50vh] p-4 border-[2px] border-[#333] rounded-lg text-white">
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="w-full h-2/3">
                                <img src={item.imageUrl} className="w-full h-full rounded-lg" />
                                <p className="text-[0.8rem]">{item.link}</p>
                            </div>
                            <div className="w-full flex h-max flex-wrap items-end">
                                <div className="w-full lg:w-2/3 text-left">
                                    <h3 className="font-bold text-[1rem] uppercase ">{item.title}</h3>
                                    <p className="text-[0.9rem]">{item.description}</p>
                                </div>
                                <button className="w-full md:w-1/3 uppercase text-[0.9rem] px-4 py-2 text-white border-white border-[1px] transition ease-in-out duration-150 hover:border-[#C4CB38] hover:text-[#C4CB38]">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
