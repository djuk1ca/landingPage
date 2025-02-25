import Navbar from "../Navbar"
import ReportForm from "./components/ReportForm";
import ReportSubmitted from './components/ReportSubmitted';
import { useState } from "react";

export default function ReportIncident({editing}){  
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
    }

    return(
        <div className="w-full min-h-screen bg-[#151516] bg-pozadina font-zenKaku">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="py-2">
                <ReportForm editing={editing} submitted={submitted} handleSubmit={handleSubmit} />
                <ReportSubmitted submitted={submitted} />
            </div>
        </div>
    )
}
