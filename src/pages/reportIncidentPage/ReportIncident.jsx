import Navbar from "./components/Navbar"
import { useRef, useState } from "react";

const options = ["Option 1", "Option 2", "Option 3"]

const file_browser = document.getElementById('input-file');
export default function ReportIncident(){
    const fileRef = useRef()
    const [files, setFiles] = useState([]);                                                
    
    function handleOnClick() {
        fileRef.current.click()
    }

    const filesHandler = (e) => {
        const fileArray = Array.from(e.target.files)
        setFiles(fileArray)
    };
    
    
    return(
        <div className="bg-neutral-900 bg-pozadina w-screen h-screen font-zenKaku">
            <Navbar />
            <div className="flex flex-col items-center w-full">
                <div className="w-4/5 mt-8 lg:mt-0 bg-[#1B1B1B] opacity-75 border-[1px] border-[#C4CB38] rounded-[50px] text-center px-14 py-5">
                    <h1 className="text-[4rem] leading-[3.2rem] uppercase font-bold text-white mb-8">Report an <br /> <span className="text-[#C4CB38]">incident</span></h1>
                    <div className="flex flex-grid">
                        <div className="w-full lg:w-1/2 mr-4">
                            <select className="appearance-none w-full bg-transparent border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-full leading-normal font-thin  focus:border-gray-300 mb-8">
                                <option>Broker...</option>
                                {options.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>
                            <input className="w-full bg-transparent text-[#C1C1C1] border border-white rounded-full py-3 pl-6 pr-8  leading-normal  focus:border-gray-300" type="text" placeholder="Warehouse"/>
                        </div>

                        <div className="w-full lg:w-1/2 ml-4">
                            <select className="appearance-none w-full bg-transparent border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-full leading-normal font-thin  focus:border-gray-300 mb-8">
                                <option>Incident Type...</option>
                                {options.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>
                            <input className="w-full bg-transparent text-[#C1C1C1] border border-white rounded-full py-3 pl-6 pr-8  leading-normal  focus:border-gray-300" type="date" placeholder="Date"/>
                        </div>
                    </div>
                    <textarea className="w-full h-24 mt-8 bg-transparent text-[#C1C1C1] border border-white rounded-[25px] py-3 pl-6 pr-8  leading-normal  focus:border-gray-300" type="text" placeholder="Details..."/>
                    <div className="w-full mt-8 bg-transparent text-[#C1C1C1] border border-white rounded-full py-3 pl-6 pr-8  leading-normal  focus:border-gray-300 flex justify-between items-center">
                    <ul>{files.length != 0 ? files.map((file, index) => (<li key={index}>{file.name} ({file.type})</li>)) : "Supporting Evidence (Attach files)"}</ul>
                        <button onClick={handleOnClick} className="text-sm py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] bg-transparent uppercase text-[#C4CB38] font-thin">BROWSE</button>
                        <input className="hidden" onChange={filesHandler} type="file" ref={fileRef} />
                    </div>
                    <button className="mt-8 px-12 lg:px-32 py-1 bg-transparent border-[4px] border-[#C4CB38] text-lg tracking-[20px] text-[#C4CB38] font-black rounded-[10px]">SUBMIT</button>
                    
                </div>

            </div>
        </div>
    )
}

//{files ? files.map((item, index) => (<li key={index}>{item}</li>)) : "Supporting Evidence (Attach files)"}