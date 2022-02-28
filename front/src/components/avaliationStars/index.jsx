import { useState } from 'react';
import { Button, InputGroup, Stack } from 'react-bootstrap';
import { MdStarOutline, MdStar } from 'react-icons/md';


const StarRating = () => {
  
    const [rating, setRating] = useState(null);

    
 
  return (
    <>     
        {[ ... Array(5)].map((star, i) => {
              const ratingValue = i + 1;

            return (
                <label>
                    <input className='d-none' type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)}/>
                    <MdStar className='ms-1' color={ratingValue <= rating ? "#1DBEB4" : "#bfbfbf"} />
                </label> 
             )
        })}      
             
    </>
  );
}

export default StarRating;