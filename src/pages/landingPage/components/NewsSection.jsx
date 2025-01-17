import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const news = [
    {
        imageUrl: "/gradient.png",
        title: "title-1",
        description: "lorem ipsum dolor mit amet"
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
];

export default function NewsSection() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((index - 1 + news.length) % news.length);
            setFade(true);
        }, 300); // Match the duration with the CSS transition
    };

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((index + 1) % news.length);
            setFade(true);
        }, 300);
    };

    return (
        <div className="py-8 w-[90%] lg:w-4/5 m-auto">
            <h1 className='hidden text-center font-black text-[2.5rem] text-white pb-8'>News</h1>
            <div className="h-[60vh] flex justify-center p-4 items-center relative overflow-hidden border-[2px] border-[#333] rounded-lg text-white">
                <button onClick={handlePrev} className="absolute left-4 z-10 cursor-pointer">
                    <MdKeyboardArrowLeft color="#fff" size={50} />
                </button>
                <div
                    className={`w-full h-full flex flex-col items-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={news[index].imageUrl} className="w-full h-3/4 object-cover rounded-lg" />
                    <div className="w-full h-32 flex items-end gap-3 justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-[1rem] uppercase ">{news[index].title}</h3>
                            <p className="text-[0.75rem]">{news[index].description}</p>
                        </div>
                        <button className="uppercase text-[0.75rem] px-4 py-2 text-white border-white border-[1px]">
                            preview
                        </button>
                    </div>
                </div>
                <button onClick={handleNext} className="absolute right-4 z-10 cursor-pointer">
                    <MdKeyboardArrowRight color="#fff" size={50} />
                </button>
            </div>
        </div>
    );
}
