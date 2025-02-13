import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import ActionHistory from "./components/ActionHistory"
import BasicInfo from "./components/BasicInfo"

import { useState } from "react"

export default function Dashboard(){
    const username = localStorage.getItem("username")
    const [sidebarOpen, setSidebarOpen] = useState(false);



    function handleSidebar(){
        setSidebarOpen(!sidebarOpen)
    }

    return(
        <div className="relative bg-[#151516] flex font-zenKaku">
            <Sidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
            <div className="block w-full">
                <Navbar username={username} handleSidebar={handleSidebar} />
                <div className="px-6 lg:px-12 ">
                    <h1 className="text-white text-xl font-thin tracking-wider">Dashboard</h1>

                    <BasicInfo />

                    <Board />

                    <ActionHistory />
                </div>

            </div>
        </div>
    )    
}
