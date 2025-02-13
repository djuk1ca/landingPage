export default function EditPayment({handlePayment, paymentFormOpen}) {
    return(
        <div className={`${paymentFormOpen ? "block" : "hidden"} fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-[#151516] bg-opacity-50`}>
            <form className="bg-[#1C1C1C] rounded-[1rem] w-[85%] md:w-1/3 p-10
                                flex flex-col items-center gap-8" action="">
                <h1 className="text-[1.5rem] font-semibold uppercase">edit payment info</h1>
                <div className="w-full flex flex-col gap-5">
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-full px-6 py-3" placeholder="Card Holder Name" type="text" name="" id="" defaultValue="" />
                    <select className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-full px-6 py-3" placeholder="Card Holder Name" type="text" name="" id="" defaultValue="" >
                        <option value="" disabled>Origin Country</option>
                        <option value="">America</option>
                    </select>
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-full px-6 py-3" placeholder="Card Number" type="text" name="" id="" defaultValue="" />
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-full px-6 py-3" placeholder="Expiry Date" type="number" name="" id="" defaultValue="" />
                    <input className="appearance-none text-[#C1C1C1] placeholder-[#C1C1C1] bg-transparent border-[1px] border-white rounded-full w-full px-6 py-3" placeholder="CVV Number" type="number" name="" id="" defaultValue="" />
                </div>
                <div className="w-full flex justify-center gap-10">
                    <button className="py-3 px-6 rounded-sm border-[#C4CB38] border-[1px] bg-transparent uppercase text-[#C4CB38] font-semibold">update</button>
                    <button onClick={handlePayment} className="py-3 px-6 rounded-sm border-[#C1C1C1] border-[1px] bg-transparent uppercase text-[#C1C1C1] font-semibold">Close</button>
                </div>
            </form>
        </div>
    )
}