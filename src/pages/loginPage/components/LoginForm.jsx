const LoginForm = () => {
    return (
        <div className="z-10 flex justify-center items-center w-screen h-screen">
            <div className="mt-16 lg:w-[28rem] sm:w-4/5 xs:w-full h-[25rem] bg-neutral-200 rounded-[75px] text-center">

                <div className="my-5 mt-10">
                    <h1 className="text-2xl mt-6 font-semibold tracking-wide">Log in to BA</h1>
                    <p className="font-extralight text-[10px]">Lorem ipsum farani asdasdasdas sdasdadasdas</p>
                </div>

                <form action="" className="mt-10">
                    <div className="mx-16">
                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg">
                            <p htmlFor="" className="uppercase text-xs pt-1">email adress:</p>
                            <input type="text" className="w-full pb-1 border-0 outline-none bg-transparent text-sm" placeholder="jondoe123@gmail.com" />
                        </div>

                        <div className="pl-3 py-1 flex flex-col items-start bg-neutral-300 border border-black rounded-lg mt-3">
                            <p htmlFor="" className="uppercase text-xs pt-1">password:</p>
                            <input type="password" className="w-full pb-1 border-0 outline-none bg-transparent text-sm" placeholder="*********" />
                        </div>
                    </div>
                    <div className="flex justify-between my-4 mx-16">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-1" /><p href="#" className="text-[0.5rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline">Remember me</p>
                        </div>
                        <a href="#" className="text-[0.5rem] lg:text-xs md:text-xs sm:text-xs tracking-tighter font-extralight underline"> Forget Password?</a>
                    </div>
                    <div className="mx-16">
                        <button className="uppercase text-lg text-yellow-400 bg-neutral-900 rounded-md w-full py-3">proceed</button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default LoginForm