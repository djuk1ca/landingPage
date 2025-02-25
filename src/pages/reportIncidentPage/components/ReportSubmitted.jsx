import { Link } from "react-router-dom"

export default function ReportSubmitted({submitted}) {
    return(
        <div className={`${submitted ? "block" : "hidden"} w-[90%] m-auto mt-32 flex flex-col gap-6 text-center items-center justify-center`}>
            <h1 className="uppercase text-[4rem] lg:text-[5rem] leading-[3rem] lg:leading-[4.5rem] text-white text-center font-bold">report<br /><span className="text-[#C4CB38]">Submitted</span></h1>
            <p className="font-thin text-white">Thank you for submiting your report. You will get notified once it gets approved.</p>
            <Link to="/dashboard" className="border-[1px] border-[#C4CB38] text-[#C4CB38] uppercase px-8 py-2">BACK TO DASHBOARD</Link>
        </div>
    )
}