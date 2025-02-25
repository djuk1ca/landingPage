import { useState } from "react"

export default function Subsection() {
    const [menuOpen, setMenuOpen] = useState(true)
    return(
        <div className="flex flex-wrap gap-4 w-[90%] lg:w-4/5 m-auto py-16 text-white items-center justify-between">
                <div className="w-full lg:w-[45%] flex flex-col items-center border-[1px] border-[#C4CB38] rounded-[2rem] p-10 lg:text-right bg-pozadina bg-center bg-cover">
                    <div className="w-full h-full">

                    </div>
                    {/*<h1 className="w-max m-auto mb-6 font-bold text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#065967] to-[#dde26e]">Title</h1>*/}
                    <h1 className="w-max m-auto font-bold text-[2.5rem] text-white">Title</h1>
                    <p className="text-[1.1rem] text-[#C1C1C1] text-justify font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra metus quis tortor egestas, quis iaculis quam mattis. Quisque feugiat dapibus lectus ac faucibus. Morbi condimentum placerat egestas. Nullam euismod justo in tortor luctus gravida. Vivamus vehicula neque non metus porttitor elementum. Cras tortor nunc, vestibulum sed tellus vel, fringilla tempus eros. Nam velit urna, volutpat in elit at, porta finibus eros. Fusce at orci id urna gravida pellentesque sed eu quam. Nam ligula nunc, finibus non felis at, lacinia mattis massa. Morbi a libero congue, fermentum velit et, aliquet eros. Ut sit amet risus consectetur, placerat elit ut, sollicitudin turpis.
                    </p>
                </div>
                <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end lg:text-right">
                    <div className="w-full">
                        <button onClick={() => setMenuOpen(!menuOpen)} className={`bg-pozadina bg-cover bg-center w-full cursor-pointer flex items-center justify-between py-2 text-[1.5rem] text-[#C1C1C1] font-thin px-4 lg:px-12 border-[1px] border-[#C4CB38] rounded-[2rem] tracking-wider`}>
                            Report Types
                            <svg className="-mr-2 size-[2.5rem] text-[#C1C1C1]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                            </button>
                        <ul className={`${menuOpen ? `max-h-screen opacity-100 mt-3` : `max-h-0 opacity-0`} 
                                        bg-pozadina bg-cover bg-center
                                        transition-all duration-300 overflow-hidden
                                        px-12 text-center text-[#C1C1C1] lg:text-left w-full none py-3 font-thin tracking-wider
                                        border-[1px] border-[#C4CB38]  rounded-[2rem] `}>
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
                <div className="w-full flex flex-col lg:flex-row gap-3 items-center py-10">
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        {/*<h1 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#065967] to-[#dde26e]">1</h1>*/}
                        <h1 className="text-[3rem] font-bold text-[#C4CB38]">1</h1>
                        <p className="text-[1.25rem] lg:text-[1.5rem] text-[#C1C1C1] text-center">File a report and evidence</p>
                    </div>
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        <h1 className="text-[3rem] font-bold text-[#C4CB38]">2</h1>

                        <p className="text-[1.25rem] lg:text-[1.5rem] text-[#C1C1C1] text-center">We manually review the integrity</p>
                    </div>
                    <div className="w-[85%] flex flex-col justify-center items-center">
                        <h1 className="text-[3rem] font-bold text-[#C4CB38]">3</h1>

                        <p className="text-[1.25rem] lg:text-[1.5rem] text-[#C1C1C1] text-center">Report published to profile</p>
                    </div>
                </div>
        </div>
    )
}