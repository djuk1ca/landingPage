import Review from "./Review";

export default function ReviewsList() {
    const n = 4;

    return(
        <div className="w-full bg-[#151516] border-[3px] rounded-t-[20px] border-[#252525] border-b-[#00818A] text-center text-white px-4 py-3 mb-10">
            <h1 className="text-[1rem] lg:text-[1.25rem] pb-3 text-center font-thin tracking-tight">Carrier Provided Reviews</h1>
            
            <Review name="Anonymus Carrier" rating={4} description="Wow, best broker I've ever dealt with." />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />
            <Review name="Anonymus Carrier" rating={5} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" />

        </div>
    )
}