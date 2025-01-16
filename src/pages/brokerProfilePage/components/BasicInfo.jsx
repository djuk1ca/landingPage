import DoughnutChart from "./DoughnutChart";

export default function BasicInfo() {
    return(
        <div className="flex justify-center gap-8">
            <div className="text-center text-white tracking-wider">
                <p>Broker Name</p>
                <DoughnutChart size={35} score={80} textSize={60} />
            </div>
            <div className="text-left text-[0.75rem] md:text-[1rem] text-white leading-7 tracking-wider">
                <p>Contact Info</p>
                <p className="text-[#94A735]">1234 Broker St, Moneytown, NY</p>
                <p>12345</p>
                <p>123-456-7890</p>
                <p><u>broker@company.com</u></p>
                <p>Bob Owner</p>
            </div>
        </div>
    )
}