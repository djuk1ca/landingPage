import Navbar from "../Navbar"
import BasicInfo from "./components/BasicInfo"
import ChangeAccountInfo from "./components/ChangeAccountInfo"

export default function UserProfile() {
    return (
        <div className="bg-[#151516] w-screen h-screen font-zenKaku text-white">
            <Navbar username={localStorage.getItem("username")}/>
            <div className="flex">
                <BasicInfo />
                <ChangeAccountInfo />
            </div>
        </div>
    )
}