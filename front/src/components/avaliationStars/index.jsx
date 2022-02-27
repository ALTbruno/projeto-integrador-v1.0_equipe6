import { useState } from 'react';
import { Button, InputGroup, Stack } from 'react-bootstrap';
import { MdStarOutline, MdStar } from 'react-icons/md';
import './style.scss'


const StarRating = () => {
  
    const [rating, setRating] = useState(null);

    function mauseIn(x) {
        x.style.color = "#1DBEB4";
        x.style.padding = "5px";
      }
 
  return (
    <>     
        {[ ... Array(5)].map((star, i) => {
              const ratingValue = i + 1;

            return (
                <label>
                    <input className='d-none' type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)}/>
                    <MdStar className='ms-1' color={ratingValue <= rating ? "#1DBEB4" : "#bfbfbf"} onMouseEnter={mauseIn(this)} onMouseLeave={() => setIsShown(false)}/>
                </label> 
             )
        })}      
             
    </>
  );
}

export default StarRating;