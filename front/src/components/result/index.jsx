import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Search from '../search';
import api from '../../services/index';
import localizador from '../../assets/icons/localizador.svg';
import wifi from '../../assets/icons/wifi.svg';
import natacao from '../../assets/icons/natacao.svg';
import hotelimg from '../../assets/pictures/hotel.svg';
import starIcon from '../../assets/icons/star.svg';
import './index.scss';

export default function Result() {
    const [hotel, setHotel] = useState({});
    const { city } = useParams();


    useEffect(() => {
        api.get('/products/6').then(response => {
            this.setHotel(response.data);
        })
    }, [])
    console.log(hotel)
    return (
        <>
            <Search />
            <div>
                <p>{hotel.name}</p>
                <p>{hotel.description}</p>
                {/* <p>{this.hotel}</p> */}
                {/* <img src={`${hotel.images[0].url}`} alt="hotel" /> */}
            </div>
        </>
    )
}
