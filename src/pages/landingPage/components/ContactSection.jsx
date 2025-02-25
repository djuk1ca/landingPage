import { useState } from "react";
import { SocialIcon } from 'react-social-icons'


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
        <div className="w-[90%] lg:w-4/5 py-16 m-auto flex flex-col lg:flex-row-reverse justify-between items-start text-left text-white">
            <div className="w-full lg:w-1/2 mb-6 text-center lg:text-right">
                <h2 className="text-[2.5rem] font-bold ">Questions? <span className="text-[#C4CB38]">Suggestions?</span> Inquiries?</h2>
                <p className="text-[1.1rem] font-thin w-full lg:w-full lg:pl-12 text-center lg:text-right">
                    Your input is invaluable to us as we work to create a fairer, more transparent platform. If you have questions, suggestions, or stories to share, we're here to listen and take action.
                </p>
                <p className="text-[1.1rem] font-bold w-full lg:w-full lg:pl-12 text-center lg:text-right">
                support@brokerauditor.com
                </p>
                <div className="w-full flex justify-center lg:justify-end items-center gap-4">
                    <SocialIcon url='https://www.linkedin.com/company/broker-auditor/' network="linkedin" bgColor="#151516" />
                    <SocialIcon url='https://www.youtube.com/channel/UCdaHHbZmFf_owDmQSDuOoGA' width={150} network="youtube" bgColor="#151516" />
                    <SocialIcon url='https://x.com/BrokerAuditor/' network="x" bgColor="#151516" />
                    <SocialIcon url='https://www.instagram.com/brokerauditor/' network="instagram" bgColor="#151516" />
                </div>
                
            </div>
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 p-10 flex flex-col gap-4
            border-2 border-[#2D2D2D] bg-pozadina bg-cover bg-center
            text-white transition-all duration-300 rounded-lg">
                <input
                    className={`w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] ${errors.name ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]`}
                    type="text"
                    name="name"
                    placeholder="Name:"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                
                <input
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]"
                    type="text"
                    name="company-name"
                    placeholder="Company Name:"
                />
                
                <input
                    className={`w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] ${errors.email ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin  transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]`}
                    type="email"
                    name="email"
                    placeholder="Email:"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                
                <input
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]"
                    type="text"
                    name="phone"
                    placeholder="Phone:"
                />
                
                <select
                    className="w-full rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] border-[#2D2D2D] text-neutral-400 placeholder-neutral-400 font-thin  transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]"
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
                    className={`w-full h-20 rounded-md bg-[#151516] px-4 py-2 text-[1rem] lg:text-[1.2rem] outline-none border-[1px] ${errors.message ? 'border-red-500 placeholder-red-500' : 'border-[#2D2D2D] text-neutral-400'} placeholder-neutral-400 font-thin transition ease-in duration-150 focus:text-[#C4CB38] focus:placeholder-[#C4CB38] focus:border-[#C4CB38]`}
                    name="message"
                    placeholder="Message:"
                    onChange={() => setErrors(errors)}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                
                <button type="submit" className="bg-[#151516] text-neutral-400 font-thin rounded-md text-[1.5rem] px-4 py-2 border-2 border-[#2D2D2D] hover:drop-shadow-lg shadow-white uppercase transition ease-in duration-150 hover:text-[#C4CB38] hover:border-[#C4CB38]">
                    Submit
                </button>
            </form>
        </div>
    );
}
