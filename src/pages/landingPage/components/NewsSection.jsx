import { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

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
    
]

export default function NewsSection() {
    const [index, setIndex] = useState(0);

    return(
        <div className="py-8">
            <h1 className='hidden text-center  font-black text-[2.5rem] text-white pb-8'>News</h1>
            <div className="w-screen h-[60vh] flex justify-center items-center">
                <span onClick={() => setIndex((index - 1 + news.length) % news.length)} className="cursor-pointer"><FaAngleLeft color="#2D2D2D" size={80}/></span>
                <div key={index} className="w-3/5 h-full flex flex-col items-center p-4 bg-[#2D2D2D] rounded-[2rem] text-white font-zenKaku">
                    <img src={news[index].imageUrl} className="w-full h-3/4 object-cover rounded-[1rem]"/>
                    <div className="w-full h-32 flex items-end justify-between px-2">
                        <div className="text-left">
                            <h3 className="font-bold uppercase">{news[index].title}</h3>
                            <p>{news[index].description}</p>
                        </div>
                        <button className="uppercase px-4 py-2 text-[#A1A732] border-[#A1A732] border-[1px]">preview</button>
                    </div>
                </div>
                <span onClick={() => setIndex((index + 1) % news.length)} className="cursor-pointer"><FaAngleRight color="#2D2D2D" size={80}/></span>
            </div>
        </div>
    )
}