import {useState, useRef} from 'react'

const options = ["Option 1", "Option 2", "Option 3"]

export default function ReportForm({editing, submitted, handleSubmit}){
    const fileRef = useRef()

    const [files, setFiles] = useState([]);                                                
    
    function handleFiles() {
        fileRef.current.click()
    }

    function clearFiles() {
        setFiles([]);
    }

    const filesHandler = (e) => {
        e.preventDefault();
        const fileArray = Array.from(e.target.files)
        setFiles(fileArray)
    };

    const reportH1 = <h1 className="text-[2.5rem] lg:text-[4rem] leading-[3.2rem] uppercase font-bold text-white mb-8">Report an <br /> <span className="text-[#C4CB38]">incident</span></h1>

    const editH1 = <h1 className="text-[2.5rem] lg:text-[4rem] leading-[3.2rem] uppercase font-bold text-white mb-8">Edit an Incident <br /> <span className="text-[#C4CB38]">report</span></h1>

    return(
        <form onSubmit={handleSubmit} className={`${submitted ? "hidden" : ""} w-[90%] lg:w-4/5 m-auto mt-8 lg:mt-0 bg-[#1B1B1B] opacity-75 border-[1px] border-[#C4CB38] rounded-[50px] text-center px-8 py-8`}>
            {editing ? editH1 : reportH1}
            <div className="flex flex-wrap justify-between gap-8">
                    <select className="relative appearance-none w-full lg:w-[47%] bg-[#151515] border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-full leading-normal font-thin focus:border-gray-300" >
                        <option>Broker...</option>
                        {options.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                        
                    <input className="w-full lg:w-[47%]  text-[#C1C1C1] bg-[#151515] border-[1px] border-white rounded-full py-3 pl-6 pr-8  leading-normal  focus:border-gray-300" type="text" placeholder="Warehouse"/>

                    <select className="appearance-none w-full lg:w-[47%]  bg-[#151515] border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-full leading-normal font-thin  focus:border-gray-300 ">
                        <option>Incident Type...</option>
                        {options.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                    <input type='date' className="w-full lg:w-[47%] bg-[#151515] relative inline-block text-[#C1C1C1] border border-white rounded-full py-3 pl-6 pr-8 justify-between leading-normal  focus:border-gray-300" />
                       
            </div>
            <textarea className="w-full h-24 mt-8 bg-[#151515] text-[#C1C1C1] border border-white rounded-[1rem] py-3 pl-6 pr-8  leading-normal  focus:border-gray-300" type="text" placeholder="Details..."/>
            <div className="w-full min-h-20 mt-8 bg-[#151515] text-[#C1C1C1] border border-white rounded-[1rem] py-3 pl-6 pr-8  leading-normal  focus:border-gray-300 flex flex-wrap justify-around lg:justify-between items-center">
                <ul className='flex flex-wrap gap-3 text-[1rem]'>
                    {
                        files.length != 0 ? 
                        files.map((file, index) => (<li key={index}>{file.name}, </li>)) : 
                        "Supporting Evidence (Attach files)"
                    }
                </ul>
                <div className="w-full lg:w-1/5 flex flex-col justify-between lg:justify-end gap-3 mt-3 lg:mt-0">
                    {files.length > 0 && <button type='button' onClick={clearFiles} className="text-sm py-3 px-6 rounded-sm border-red-500 text-red-500 border-[1px] uppercase font-thin">CLEAR FILES</button>}
                    <button type='button' onClick={handleFiles} className="text-sm py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] uppercase text-[#C4CB38] font-thin">BROWSE</button>
                </div>
                <input className="hidden" onChange={filesHandler} type="file" ref={fileRef} multiple/>
            </div>
            <button className="mt-6 px-8 lg:px-32 text-[0.75rem] lg:text-[1rem] py-1 border-2 border-[#C4CB38] text-lg tracking-[10px] text-[#C4CB38] font-bold rounded-[10px]" type='submit'>{editing ? "EDIT" : "SUBMIT"}</button>
            
        </form>
    )
}