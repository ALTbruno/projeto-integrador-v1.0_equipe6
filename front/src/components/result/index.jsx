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
        api.get('products/6').then(response => {
            setHotel(response.data);
        })
    }, [])
    console.log(hotel)
    return (
        <>
            <Search />
            <section className='container-results' >
                <div className="card-result">
                    <img className='img-result' src={hotelimg} alt="" />
                    <section className='content-result'>
                        <div>
                            <h2 className='title-result'>{hotel.name}</h2>
                            <p className='category-result'>HOTEL</p>
                        </div>
                        <section className='locatizacao-result'>
                            <img src={localizador} alt="" srcset="" />
                            <p>A 940 m do centro - <span>MOSTRAR NO MAPA</span></p>
                        </section>
                        <div className='characteristics-result'>
                            <img className='icon-characteristics-result' src={wifi} alt="" />
                            <img className='icon-characteristics-result' src={natacao} alt="" />
                        </div>
                        <p className='description-result'>Descrição descrição descrição descrição descrição descrição descrição descrição descrição  <span>mais...</span></p>
                    </section>
                    <section className="evaluation-result">
                        <div className='avaliacao'>
                            <h6>4.5</h6>
                            <p>Muito bom</p>
                        </div>
                        <div className='stars'>
                            <img src={starIcon} alt="" srcset="" />
                            <img src={starIcon} alt="" srcset="" />
                            <img src={starIcon} alt="" srcset="" />
                            <img src={starIcon} alt="" srcset="" />
                            <img src={starIcon} alt="" srcset="" />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
