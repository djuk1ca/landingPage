export default function BasicInfo({fullName, email, phone, adress, companyName}){
    return (
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <img src="/gradient.png" alt="pfp" width={150} className="rounded-full"/>
            <div className="flex flex-col items-center lg:items-start gap-3 text-[#C1C1C1]">
                <h1 className="text-white text-[2rem] lg:text-[3rem]"><b>{fullName}</b></h1>
                <p className="">{email}</p>
                <p className="text-white"><b>Affiliated Carrier Company</b></p>
                <p className="">{companyName}</p>
                <p className="">{adress}</p>
                <p className="">{phone}</p>
            </div>
        </div>
    )   
}