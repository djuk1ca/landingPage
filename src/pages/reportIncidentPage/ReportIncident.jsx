import Navbar from "../Navbar"
import ReportForm from "./components/ReportForm";

export default function ReportIncident(){  
    return(
        <div className="bg-[#151516] bg-pozadina w-screen h-screen font-zenKaku">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="flex flex-col items-center w-full">
                <ReportForm />
            </div>
        </div>
    )
}
