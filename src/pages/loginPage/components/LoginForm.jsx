import { split } from "postcss/lib/list";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const LoginForm = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const [message, setMessage] = useState("")

    async function postData(email, password) {
        const data = new URLSearchParams();
        data.append("email", email);
        data.append("password", password);
    
        try {
            const response = await fetch("http://127.0.0.1:4334/login", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Access-Control-Allow-Origin': '*',
                },
                body: data.toString(),
            });
    
            if (!response.ok) {
                const error = await response.json();
                console.error("Error:", error.message);
                setMessage(error.message);
                return;
            }
    
            const result = await response.json();
            console.log(result);
    
            localStorage.setItem('session', result.authToken);
            localStorage.setItem('username', email.split("@")[0]);
    
            navigate("/dashboard");
        } catch (error) {
            console.error("Request failed:", error);
            setMessage("An unexpected error occurred.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = formRef.current;
        const email = form['email'].value;
        const password = form['password'].value;

        postData(email, password);
    }
    // Posle upali
    if (localStorage.getItem('session') !== null) {
        const redirectUrl = '/dashboard';
        return <Navigate to={redirectUrl} />
    }

    return (
        <div className="z-10 flex justify-center items-center w-screen h-screen">
            <div className="mt-16 lg:w-[28rem] sm:w-4/5 xs:w-full h-[25rem] bg-neutral-200 rounded-[75px] text-center">
                <div className="my-4 mt-8">
                    <h1 className="text-2xl mt-6 font-semibold tracking-wide">Log in to BA</h1>
                    <p className="font-extralight text-[10px]">Lorem ipsum farani asdasdasdas sdasdadasdas</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-10">
                    <div className="mx-16">
                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg">
                            <label htmlFor="email" className="uppercase pr-2 text-xs pt-1">Email Address:</label>
                            <input
                                type="text"
                                name="email"
                                className="w-full pb-1 border-0 outline-none bg-transparent text-sm"
                                placeholder="jondoe123@gmail.com"
                            />
                        </div>

                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg mt-3">
                            <label htmlFor="password" className="uppercase pr-2 text-xs pt-1">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full pb-1 border-0 outline-none bg-transparent text-sm"
                                placeholder="*********"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between my-3 mx-16">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-1" />
                            <p className="text-[0.75rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline">
                                Remember me
                            </p>
                        </div>
                        <a href="#" className="text-[0.75rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline">
                            Forget Password?
                        </a>
                    </div>
                    {message ? <p className="mt-2 mb-3 text-red-500 text-[0.75rem]">{message}</p> : ""}
                    <div className="mx-16">
                        <button
                            type="submit"
                            className="uppercase text-lg text-yellow-400 bg-neutral-900 rounded-md w-full py-3"
                        >
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
