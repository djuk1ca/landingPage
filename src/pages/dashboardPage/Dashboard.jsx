import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import ActionHistory from "./components/ActionHistory"
import BasicInfo from "./components/BasicInfo"

export default function Dashboard(){
    const username = localStorage.getItem("username")
    return(
        <div className="bg-[#151516] flex font-zenKaku">
            <Sidebar/>
            <div className="block w-full lg:ml-[15%]">
                <Navbar username={username}/>
                <div className="mx-12 lg:ml-24 mt-8 lg:mr-20">
                    <h1 className="text-white text-xl font-thin tracking-wider">Dashboard</h1>

                    <BasicInfo />

                    <Board />

                    <ActionHistory />
                </div>

            </div>
        </div>
    )    
}
