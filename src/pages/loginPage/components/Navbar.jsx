import { Link } from "react-router-dom"

export default function Navbar({register}){
    return (
        <div className="fixed top-0 z-50 py-3 w-full">
            <div className="px-4 relative w-full">
                <div className="flex justify-between items-center px-6">
                    <Link to="/" className="flex justify-center items-center ml-2 my-2 h-16 gap-2">
                        <img src="/logoDark.png" width={150} alt="" />
                    </Link>
                    
                    <Link
                        to={register ? '/login' : '/register'} 
                        className="text-md py-3 px-6 rounded-sm border-2 border-black bg-transparent"
                    >
                        {register ? "Sign in" : "Sign Up"}
                    </Link>
                </div>
            </div>
        </div>

   )}