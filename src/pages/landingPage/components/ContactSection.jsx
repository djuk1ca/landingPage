import { useState } from "react";

export default function ContactSection() {
    const [errors, setErrors] = useState({});

    const validateForm = (e) => {
        const form = e.target;
        const newErrors = {};

        if (!form.name.value.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!form.email.value.trim()) {
            newErrors.email = "Email is required.";
        }

        if (!form.message.value.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm(e);
    };

    return (
        <div className="w-[90%] lg:w-4/5 py-6 m-auto flex flex-col items-center text-center text-white">
            <div className="w-full mb-6">
                <h1 className="text-[2.5rem] font-bold">Questions? <span className="text-[#C4CB38]">Suggestions?</span> Inquiries?</h1>
                <p className="text-[1rem] font-thin">
                    Your input is invaluable to us as we work to create a fairer, more transparent platform. If you have questions, suggestions, or stories to share, we're here to listen and take action.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full p-6 flex flex-col gap-4
            border-2 border-[#2D2D2D] bg-pozadina bg-cover bg-center
            text-white transition-all duration-300 rounded-lg">
                <input
                    className={`w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] ${errors.name ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin transition-[border] duration-300 focus:border-[#333]`}
                    type="text"
                    name="name"
                    placeholder="Name:"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                
                <input
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition-[border] duration-300 focus:border-[#333]"
                    type="text"
                    name="company-name"
                    placeholder="Company Name:"
                />
                
                <input
                    className={`w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] ${errors.email ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin  transition-[border] duration-300 focus:border-[#333]`}
                    type="email"
                    name="email"
                    placeholder="Email:"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                
                <input
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition-[border] duration-300 focus:border-[#333]"
                    type="text"
                    name="phone"
                    placeholder="Phone:"
                />
                
                <select
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition-[border] duration-300 focus:border-[#333]"
                    name="inquiryTopic"
                    placeholder="Inquiry Topic:"
                >
                    <option value="" selected>Inquiry Topic:</option>
                    <option value="Topic 1">Topic 1</option>
                    <option value="Topic 2">Topic 2</option>
                    <option value="Topic 3">Topic 3</option>
                    <option value="Topic 4">Topic 4</option>
                    <option value="Topic 5">Topic 5</option>
                </select>
                
                <textarea
                    className={`w-full h-20 rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.5rem] outline-none border-[1px] ${errors.message ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin transition-[border] duration-300 focus:border-[#333]`}
                    name="message"
                    placeholder="Message:"
                    onChange={() => setErrors(errors)}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                
                <button type="submit" className="bg-[#151516] text-neutral-400 font-thin rounded-md text-[1.5rem] px-4 py-2 border-2 border-[#2D2D2D] hover:drop-shadow-lg shadow-white transition-[border] duration-300 hover:border-[#333] uppercase">
                    Submit
                </button>
            </form>
        </div>
    );
}
