import { useNavigate } from "react-router-dom";

export default function ChangeAccountInfo({fullName, email, phone, adress, companyName, handlePayment, handleUpdate}){
    const navigate = useNavigate();
    function handleLogOut(){
        localStorage.removeItem("session");
        localStorage.removeItem("username");
        navigate("/login")
    }

    return (
        <div className="w-full flex flex-col lg:w-2/3">
            <h1 className="text-center font-black leading-[2.75rem] lg:leading-[3.5rem] text-[3.5rem] lg:text-[4.5rem]">YOUR <br /><span className="text-[#C4CB38]">ACCOUNT</span></h1>
            <h3 className="text-center lg:text-left mt-8 font-bold">PERSONAL INFO</h3>
            <form onSubmit={handleUpdate} className="flex flex-wrap items-center lg:items-start justify-between w-full mt-8 gap-8">
                <div className="w-full lg:w-[45%] flex flex-col items-center gap-8">
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-2/3 lg:w-full px-8 py-4" type="text" name="fullName" placeholder="Full Name:" defaultValue={fullName} />
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-2/3 lg:w-full px-8 py-4" type="email" name="email" placeholder="Email:" defaultValue={email} />
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-2/3 lg:w-full px-8 py-4" type="text" name="phone" placeholder="Phone Number:" defaultValue={phone} />
                </div>
                <div className="w-full lg:w-[45%] flex flex-col items-center gap-8">
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-2/3 lg:w-full px-8 py-4" type="text" name="adress" placeholder="Adress:" defaultValue={adress} />
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-2/3 lg:w-full px-8 py-4" type="text" name="companyName" placeholder="Company Name:" defaultValue={companyName} />
                </div>
                <div className="w-full flex flex-col items-center lg:flex-row gap-6">
                    <button type="submit" className="py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] bg-transparent uppercase text-[#C4CB38] font-semibold cursor-pointer">update</button>
                    <button onClick={handlePayment} className="py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] bg-transparent uppercase text-[#C4CB38] font-semibold">edit payment info</button>
                    <button onClick={handleLogOut} className="py-3 px-6 rounded-sm border-red-500 border-[1px] bg-transparent uppercase text-red-500 font-semibold">log out</button>
                </div>
            </form>
        </div>
    )
}