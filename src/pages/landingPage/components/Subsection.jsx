import { useState } from "react"

export default function Subsection() {
    const [menuOpen, setMenuOpen] = useState(true)
    return(
        <div className="flex flex-wrap w-[90%] md:w-4/5 m-auto py-8 text-white items-center justify-between">
                <div className="w-full lg:w-[45%] text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[2.5rem]">Title</h1>
                    <p className="text-[1rem] text-justify">orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra metus quis tortor egestas, quis iaculis quam mattis. Quisque feugiat dapibus lectus ac faucibus. Morbi condimentum placerat egestas. Nullam euismod justo in tortor luctus gravida. Vivamus vehicula neque non metus porttitor elementum. Cras tortor nunc, vestibulum sed tellus vel, fringilla tempus eros. Nam velit urna, volutpat in elit at, porta finibus eros. Fusce at orci id urna gravida pellentesque sed eu quam. Nam ligula nunc, finibus non felis at, lacinia mattis massa. Morbi a libero congue, fermentum velit et, aliquet eros. Ut sit amet risus consectetur, placerat elit ut, sollicitudin turpis.</p>
                </div>
                <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end lg:text-right">
                    <div className="w-full lg:w-[80%]">
                        <button onClick={() => setMenuOpen(!menuOpen)} className={`w-full cursor-pointer flex items-center justify-between py-2 text-[1.5rem] text-white font-bold px-4 lg:px-12 border-[1px] border-[#C4CB38]  rounded-md`}>
                            Report Types
                            <svg class="-mr-1 size-[2.5rem] text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                            </button>
                        <ul className={`${menuOpen ? `max-h-screen opacity-100 mt-3` : `max-h-0 opacity-0`} 
                                        transition-all duration-300 overflow-hidden 
                                        px-12 text-center lg:text-left w-full none py-3 font-thin tracking-wider
                                         border-[1px] border-[#C4CB38]  rounded-md `}>
                            <li >Filed False Carrier Report</li>
                            <li>Detention Unpaid</li>
                            <li>TONU Unpaid</li>
                            <li>Lumper Unpaid</li>
                            <li>Load Unpaid</li>
                            <li>Double Broker</li>
                            <li>Fraudulent Report</li>
                            <li>Shipment Misrepresentation</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-3 items-center py-4">
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        <h1 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#065967] to-[#dde26e]">1</h1>
                        <p className="text-[1.25rem] lg:text-[1.5rem] text-white text-center">File a report and evidence</p>
                    </div>
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        <h1 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#065967] to-[#dde26e]">2</h1>
                        <p className="text-[1.25rem] lg:text-[1.5rem] text-white text-center">We manually review the integrity</p>
                    </div>
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        <h1 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#065967] to-[#dde26e]">3</h1>
                        <p className="text-[1.25rem] lg:text-[1.5rem] text-white text-center">Report published to profile</p>
                    </div>
                </div>
        </div>
    )
}