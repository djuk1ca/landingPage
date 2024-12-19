import { useNavigate } from "react-router-dom";

export default function ChangeAccountInfo(){
    const navigate = useNavigate();
    function handleLogOut(){
        localStorage.removeItem("session");
        localStorage.removeItem("username");
        navigate("/login")
    }

    return (
        <div className="ml-10 w-1/2 lg:w-3/4">
            <h1 className="text-center font-black leading-10 text-[3.5rem]">YOUR <br /><span className="text-[#C4CB38]">ACCOUNT</span></h1>
            <h3 className="mt-5 font-bold">PERSONAL INFO</h3>
            <form className="flex flex-col lg:flex-row w-full mt-8 gap-10">
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <input className="appearance-none bg-transparent border-[1px] border-white rounded-[25px] w-2/3 lg:w-full px-8 pb-6 pt-3" type="text" name="" id="" defaultValue="John Doe" />
                    <input className="appearance-none bg-transparent border-[1px] border-white rounded-[25px] w-2/3 lg:w-full px-8 pb-6 pt-3" type="email" name="" id="" defaultValue="johndoe@gmail.com" />
                    <input className="appearance-none bg-transparent border-[1px] border-white rounded-[25px] w-2/3 lg:w-full px-8 pb-6 pt-3" type="text" name="" id="" defaultValue="+112333322" />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <input className="appearance-none bg-transparent border-[1px] border-white rounded-[25px] w-2/3 lg:w-full px-8 pb-6 pt-3" type="text" name="" id="" defaultValue="BlaBla Avenue 2561" />
                    <input className="appearance-none bg-transparent border-[1px] border-white rounded-[25px] w-2/3 lg:w-full px-8 pb-6 pt-3" type="text" name="" id="" defaultValue="Test Company Name" />
                </div>
                <div className="w-full lg:w-1/3 text-center block">
                    <button className="text-sm mt-4 lg:mt-[40%] py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] bg-transparent uppercase text-[#C4CB38] font-thin">update</button><br />

                    <button onClick={handleLogOut} className="text-sm mt-4 lg:mt-[40%] py-3 px-6 rounded-sm border-red-500 border-[1px] bg-transparent uppercase text-red-500 font-thin">log out</button>
                </div>
            </form>
        </div>
    )
}