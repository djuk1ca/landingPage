import { Link } from "react-router-dom";

export default function Search({username}){
    return(
        <div className="fixed top-0 z-50 w-full">
            <div className="container relative w-full">
                <nav className="flex justify-between items-center mx-8 pt-2">
                    <Link to="/" className="flex justify-center items-center ml-2 my-2 h-16 gap-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-yellow-300"></div>
                        <h1 className="text-2xl text-yellow-300">BA</h1>
                    </Link>
                    <Link
                        to="/account"
                        className="text-sm py-3 px-6 rounded-sm border-yellow-300 border-[1px] bg-transparent uppercase text-yellow-300 font-thin">
                        {username}
                    </Link>
                </nav>
            </div>
        </div>
    )
}