const options = ["Option 1", "Option 2", "Option 3"]

export default function SearchForm(){
    return(
        <div className="flex flex-row min-h-screen justify-center items-center px-6">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <input className="w-full bg-transparent text-[#C1C1C1] border border-white rounded-full py-6 px-8 mb-3 font-thin leading-normal  focus:border-gray-300" type="text" placeholder="Name, USDOT, or MC..."/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative border-white">
                            <select className="appearance-none w-full bg-transparent border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-lg leading-normal font-thin  focus:border-gray-300">
                                <option>City</option>
                                {options.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#C1C1C1]">
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717964 0.75L13.9282 0.75L7 12Z" fill="#C1C1C1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative border-white">
                            <select className="appearance-none w-full bg-transparent border-white border-[1px] text-[#C1C1C1] py-3 pl-6 pr-8 rounded-lg leading-normal font-thin  focus:border-gray-300">
                                <option>State</option>
                                {options.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#C1C1C1]">
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717964 0.75L13.9282 0.75L7 12Z" fill="#C1C1C1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-transparent text-[#C1C1C1] placeholder-[#C1C1C1] border border-gray-200 rounded-lg py-3 px-3 font-thin leading-normal focus:border-gray-500" type="text" placeholder="Site score rating"/>
                    </div>
                </div>
                <div className="block text-center pt-8">
                    <button className="border-[#C4CB38] border-[1px] text-[#C4CB38] uppercase px-8 py-3 text-[12px] font-medium ">Search</button>
                    <p className="text-white text-sm font-thin pt-4 tracking-wider leading-6">
                    Find the right broker for your load <br />
                    Use our comprehensive metrics to take the guesswork out of your business
                    </p>
                </div>
            </form>
        </div>
    )
}