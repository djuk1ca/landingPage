import { Link } from "react-router-dom";

export default function Search({username}){
    return(
        <div className="fixed top-0 z-50 w-full">
            <nav className="flex justify-between items-center mx-8 pt-2">
                <Link to="/" className="flex justify-center items-center ml-2 my-2 h-16 gap-2">
                    <img src="/logoDark.png" width={150} alt="" />
                </Link>
                <Link
                    to="/account"
                    className="text-sm py-3 px-6 rounded-sm border-yellow-300 border-[1px] bg-transparent uppercase text-yellow-300 font-thin">
                    {username}
                </Link>
            </nav>
        </div>
    )
}