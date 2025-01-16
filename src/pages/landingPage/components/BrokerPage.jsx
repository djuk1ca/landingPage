import BrokerProfile from "./brokerProfilePage/brokerProfile"
export default function BrokerPage(){
    return(
        <div className="w-[90%] md:w-4/5 py-8 m-auto text-center">
            <h1 className="font-bold text-[2.5rem] tracking-wide  text-white">Interactive Broker Profile Page </h1>
            <p className="text-[#00818A] mb-8">Hover over elements denoted with <span className="text-red-500">*</span> to reveal their description.</p>
            <BrokerProfile />
        </div>
    )
}