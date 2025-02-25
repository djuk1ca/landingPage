export default function FourthSection() {
    return(
        <div className="w-[90%] lg:w-4/5 m-auto text-white py-16">
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="w-full lg:w-[45%] flex flex-col items-center border-2 border-[#333] rounded-lg p-10 lg:text-right bg-pozadina bg-center bg-cover">
                    <h2 className="w-max m-auto font-bold text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#065967] to-[#dde26e]">Who We Are</h2>
                    <p className="text-[1rem] text-justify font-thin">What sets Broker Auditor apart from the few platforms that exist—or don’t—is simple: we are carriers, too. This platform is built for carriers by carriers, with a deep understanding of the challenges and abuses our community faces. We’re not outsiders looking in; we’ve lived these frustrations ourselves and are determined to bring about real change. Our mission is clear: to expose these injustices, demand accountability, and elevate ethical practices within the industry. Together, we can ensure that brokers are no longer allowed to operate in the shadows.
                    It’s time for transparency. It’s time for accountability. It’s time for carriers to take back control.
                    </p>
                </div>
                <div className="w-full lg:w-[45%] h-[30vh] rounded-lg bg-gradient-to-t from-[#065967] to-[#dde26e] " />
            </div>
        </div>
    )
}