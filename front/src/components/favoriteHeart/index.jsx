import "./style.scss"
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { Button } from "react-bootstrap";
import { useState } from "react";


const FavoriteHeart = () => {

    const [favorite, setFavorite] = useState();



    return (
        <>
            {[ ... Array(1)].map((star, i) => {
                const favoriteValue = i + 1;

                return (
                    <label className='position-absolute end-0 align-self-start m-2 me-4'>
                        <input className='d-none' type='radio' name='favorite' value={favoriteValue} onClick={() => setFavorite(favoriteValue)}/>    
                        <AiFillHeart className="heart"  color={favoriteValue <= favorite ? "red" : ""} size={25}/> 
                    </label>
                )
        })}
                    
         
        </>
    )
}

export default FavoriteHeart;