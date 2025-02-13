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
   

    return (
        <div className="py-4 w-[90%] lg:w-4/5 m-auto">
            <h1 className='text-center font-black text-[2.5rem] text-white pb-4'>Auditory  <span className="text-[#C4CB38]">News</span></h1>
            <div className="flex items-center justify-between">

                <div className="w-[30%] bg-pozadina bg-cover bg-center h-[50vh] p-4 border-[2px] border-[#333] rounded-lg text-white">
                    <div className="w-full h-full flex flex-col items-center transition-opacity duration-300">
                        <img src={news[0].imageUrl} className="w-full h-3/4 object-cover rounded-lg" />
                        <div className="w-full h-full flex items-end gap-3 justify-between">
                            <div className="text-left">
                                <h3 className="font-bold text-[1rem] uppercase ">{news[0].title}</h3>
                                <p className="text-[0.75rem]">{news[0].description}</p>
                            </div>
                            <button className="uppercase text-[0.75rem] px-4 py-2 text-white border-white border-[1px]">
                                preview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] bg-pozadina bg-cover bg-center h-[50vh] p-4 border-[2px] border-[#333] rounded-lg text-white">
                    <div className="w-full h-full flex flex-col items-center transition-opacity duration-300">
                        <img src={news[1].imageUrl} className="w-full h-3/4 object-cover rounded-lg" />
                        <div className="w-full h-full flex items-end gap-3 justify-between">
                            <div className="text-left">
                                <h3 className="font-bold text-[1rem] uppercase ">{news[1].title}</h3>
                                <p className="text-[0.75rem]">{news[1].description}</p>
                            </div>
                            <button className="uppercase text-[0.75rem] px-4 py-2 text-white border-white border-[1px]">
                                preview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] bg-pozadina bg-cover bg-center h-[50vh] p-4 border-[2px] border-[#333] rounded-lg text-white">
                    <div className="w-full h-full flex flex-col items-center transition-opacity duration-300">
                        <img src={news[2].imageUrl} className="w-full h-3/4 object-cover rounded-lg" />
                        <div className="w-full h-full flex items-end gap-3 justify-between">
                            <div className="text-left">
                                <h3 className="font-bold text-[1rem] uppercase ">{news[2].title}</h3>
                                <p className="text-[0.75rem]">{news[2].description}</p>
                            </div>
                            <button className="uppercase text-[0.75rem] px-4 py-2 text-white border-white border-[1px]">
                                preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
