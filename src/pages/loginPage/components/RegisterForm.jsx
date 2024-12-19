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
        <div className="z-10 flex justify-center items-center w-screen h-screen">
            <div className="mt-16 lg:w-[28rem] sm:w-4/5 xs:w-full bg-neutral-200 rounded-[75px] text-center pt-7 pb-10">

                <div className="mb-2">
                    <h1 className="text-[2rem] font-semibold tracking-wide">Register to BA</h1>
                    <p className="font-extralight text-[10px]">Lorem ipsum farani asdasdasdas sdasdadasdas</p>
                </div>

                <form onSubmit={handleSubmit} ref={formRef} action="" className="mt-6">
                    <div className="mx-16">
                        <div className="flex gap-3 mb-3">
                            <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg">
                                <p htmlFor="" className="uppercase text-xs pt-1">First name:</p>
                                <input type="text" name="first" className="w-full pr-2 pb-1 border-0 outline-none bg-transparent text-sm" placeholder="Jon" />
                            </div><div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg">
                                <p htmlFor="" className="uppercase text-xs pt-1">Last name:</p>
                                <input type="text" name="last" className="w-full pr-2 pb-1 border-0 outline-none bg-transparent text-sm" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg">
                            <p htmlFor="" className="uppercase text-xs pt-1">email adress:</p>
                            <input type="text" name="email" className="w-full pr-2 pb-1 border-0 outline-none bg-transparent text-sm" placeholder="jondoe123@gmail.com" />
                        </div>

                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg mt-3">
                            <p htmlFor="" className="uppercase text-xs pt-1">password:</p>
                            <input type="password" name="password1" className="w-full pr-2 pb-1 border-0 outline-none bg-transparent text-sm" placeholder="*********" />
                        </div>

                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg mt-3">
                            <p htmlFor="" className="uppercase text-xs pt-1">confirm password:</p>
                            <input type="password" name="password2" className="w-full pr-2 pb-1 border-0 outline-none bg-transparent text-sm" placeholder="*********" />
                        </div>
                    </div>
                    {serverErrorMessage ? serverErrorMessage : ""}
                    {passwordError ? passwordErrorMessage : ""}
                    <div className="flex justify-between my-4 mx-16">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-1" /><p href="#" className="text-[0.75rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline">Remember me</p>
                        </div>
                        <a href="#" className="text-[0.75rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline"> Forget Password?</a>
                    </div>
                    <div className="mx-16">
                        <button type="submit" className="uppercase text-lg text-yellow-400 bg-neutral-900 rounded-md w-full py-3">proceed</button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default RegisterForm