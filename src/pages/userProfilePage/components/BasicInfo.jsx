export default function BasicInfo(){
    return (
        <div className="flex flex-col py-10 px-8 w-1/3 lg:w-1/4">
            <img src="/gradient.png" alt="pfp" className="w-28 h-28 lg:w-60 lg:h-60 rounded-full"/>
            <div className="ml-3 mt-3">
                <h1 className="text-[2rem] lg:text-[3rem] leading-10"><b>John Doe</b></h1>
                <p className="text-[#C1C1C1]">johndoe@gmail.com</p>
                <p className="mt-4"><b>Affiliated Carrier Company</b></p>
                <p className="mt-4">Test Company Name</p>
                <p className="mt-12">BlaBla Avenue 2561</p>
            </div>
        </div>
    )   
}