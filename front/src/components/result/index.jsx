import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Search from '../search';
import api from '../../services/index';

export default function Result() {
    const [hotel, setHotel] = useState({});
    const { city } = useParams();


    useEffect(() => {
        api.get('products/6').then(response => {
            this.setHotel(response.data);
        })
    }, [])
        console.log(hotel)
    return (
        <>
            <Search />
            <div>
                <p>{hotel.name}</p>
                <p>{this.hotel.images[0].url}</p>
                {/* <img src={`${hotel.images[0].url}`} alt="hotel" /> */}
            </div>
        </>
    )
}
