import { useState } from "react";
import { FaStar } from "react-icons/fa"

export default function StarRating({...props}){
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="flex gap-2">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                            key={i}
                            type="radio" 
                            className="hidden" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className={props.className} 
                            color={ratingValue <= (hover || rating) ? "#005a8a" : "#00818A"} 
                            size={20} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            />
                    </label>
                )
            })}
        </div>
    )
}