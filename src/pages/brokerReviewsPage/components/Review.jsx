import { FaStar } from "react-icons/fa"

export default function Review({name, rating, description}){
    return(
        <div className="bg-[#212121] rounded-2xl px-3 py-2 text-sm text-start mb-4">
            <div className="flex justify-start items-center gap-5 mb-3">
                <p>{name}</p>
                <div className="flex gap-1">
                    {[...Array(rating)].map((star, index) => (
                        <FaStar key={index} color="#00818A" />
                    ))}
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}