import Navbar from "./components/Navbar"
import SearchForm from "./components/SearchForm"

export default function Search(){
    return(
        <div className="w-screen h-screen bg-gradient-to-b from-neutral-800 to-black">
            <div className="w-full h-full bg-pozadina font-zenKaku">
                <Navbar />
                <SearchForm />
                
            </div>
        </div>
    )
}