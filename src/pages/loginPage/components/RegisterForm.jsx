import { useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState(false);
    const [message, setMessage] = useState("")
    const passwordErrorMessage = <p className="text-red-600 text-sm text-center">The passwords don't match.</p>;
    const serverErrorMessage = <p className="text-red-600 text-sm text-center">{message}</p>;

    async function postData(firstName, lastName, email, password) {
        const data = new URLSearchParams();
        const phone = "+123323232"
        data.append("firstName", firstName);
        data.append("lastName", lastName);
        data.append("email", email);
        data.append("password", password);
        data.append("phone", phone);

    
        try {
            const response = await fetch("http://127.0.0.1:4334/register", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Access-Control-Allow-Origin': '*',
                },
                body: data.toString(),
            });
    
            if (!response.ok) {
                const error = await response.json();
                setMessage(error.message)
                console.error("Error:", error.message);
                setMessage(error.message); // Update error message
                return; // Stop further execution
            }
    
            const result = await response.json();
            console.log("Response:", result);
            localStorage.setItem('session', result.authToken);
            localStorage.setItem('username', email.split("@")[0]);
    
            navigate("/dashboard");
        } catch (error) {
            console.error("Request failed:", error);
            setMessage("An unexpected error occurred.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = formRef.current;
        const first = form["first"].value;
        const last = form["last"].value;
        const email = form["email"].value;
        const password = form["password1"].value;
        const password1 = form["password2"].value;
        if(password1 != password){
            setPasswordError(true);
            return
        }

        postData(first, last, email, password)
    }
    // Posle upali
    if (localStorage.getItem('session') !== null) {
        const redirectUrl = '/dashboard';
        return <Navigate to={redirectUrl} />
    }
    
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="py-8 px-8 lg:px-10 w-4/5 md:w-3/5 lg:w-1/4 bg-white rounded-[3rem] text-center">
                <div className="">
                    <h1 className="text-[2rem] font-semibold tracking-wide">Register to BA</h1>
                    <p className="text-[0.8rem] font-extralight">Lorem ipsum farani asdasdasdas sdasdadasdas</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
                    <div className="">
                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-[#212121] rounded-[1rem]">
                            <label htmlFor="fullName" className="uppercase my-2 text-[0.75rem] text-[#424242] font-medium tracking-tighter leading-3 ">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="placeholder-[#616161] text-[#616161] text-[1rem] w-full mb-2 border-0 outline-none bg-transparent text-sm"
                                placeholder="Jon Doe"
                            />
                        </div>

                        <div className="pl-3 mt-3 py-1 flex flex-col items-start bg-neutral-300 border border-[#212121] rounded-[1rem]">
                            <label htmlFor="email" className="uppercase my-2 text-[0.75rem] text-[#424242] font-medium tracking-tighter leading-3 ">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="placeholder-[#616161] text-[#616161] text-[1rem] w-full mb-2 border-0 outline-none bg-transparent text-sm"
                                placeholder="jondoe123@gmail.com"
                            />
                        </div>

                        <div className="pl-3 py-1 mt-3 flex flex-col items-start bg-neutral-300 border border-[#212121] rounded-[1rem]">
                            <label htmlFor="password" className="uppercase my-2 text-[0.75rem] text-[#424242] font-medium tracking-tighter leading-3">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="placeholder-[#616161] text-[#616161] text-[1rem] w-full mb-2 border-0 outline-none bg-transparent text-sm"
                                placeholder="********"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between my-4 px-1 ">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-5 h-5 mr-2" />
                            <p className="text-[0.75rem] text-[#616161] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight">
                                I Accept TOS
                            </p>
                        </div>
                        <a href="#" className="text-[0.75rem] text-[#616161] lg:text-xs md:text-xs sm:text-xs tracking-tighter hover:underline font-extralight">
                            Already Registered?
                        </a>
                    </div>
                    {message ? <p className="mt-2 mb-3 text-red-500 text-[0.75rem]">{message}</p> : ""}
                    <div className="">
                        <button
                            type="submit"
                            className="uppercase text-lg text-yellow-400 bg-neutral-900 rounded-lg w-full py-5"
                        >
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm