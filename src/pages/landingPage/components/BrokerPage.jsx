import BrokerProfile from "./brokerProfilePage/brokerProfile"
export default function BrokerPage(){
    return(
        <div className="w-[90%] lg:w-4/5 py-16 m-auto text-center">
            <h2 className="font-bold text-[2.5rem] tracking-wide  text-white">Interactive <span className="text-[#C4CB38]">Broker Profile Page</span> </h2>
            <p className="text-[#00818A] mb-8">Hover over elements denoted with <span className="text-red-500">*</span> to reveal their description.</p>
            <BrokerProfile />
        </div>
    )
}