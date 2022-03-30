import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import localizador from '../../assets/icons/localizador.svg';
import wifi from '../../assets/icons/wifi.svg';
import natacao from '../../assets/icons/natacao.svg';
import starIcon from '../../assets/icons/star.svg';
import './index.scss'
import React from 'react'


export default function cardResult({ item }) {
    const [hotel, setHotel] = useState({
        "id": null,
        "name": "",
        "description": "",
        "category": {
          "id": null,
          "title": "",
          "description": "",
          "imageUrl": ""
        },
        "city": {
          "id": null,
          "name": "",
          "country": ""
        },
        "images": [
          {
            "id": null,
            "title": "",
            "url": ""
          }
        ],
        "characteristics": [
          {
            "id": null,
            "name": "",
            "icon": ""
          }
        ]
      });
    const navigate = useNavigate();

    useEffect(() => {
        setHotel(item);
        console.log(item);
    }, []);


    return (
        <>
            {/* A verificar como ficará a rota de detalhe do produto */}
            <div onClick={() => navigate(`/produto/${item.id}`)} className="card-result">
                {/* por enquanto uma imagem padrão para todos os cards gerados, pois alguns hoteis estavam sem imagem, quanto tiverem imagem a verificar tamanho e proporção da mesma no card */}
                <div className="container-image">
                  <img className='img-result' src={hotel.images[0].url ?  hotel.images[0].url : ''} alt="" />
                </div>
                <section className='content-result'>
                    <div>
                        <h2 className='title-result'>{hotel.name}</h2>
                        <p className='category-result'>{hotel.category.title}</p>
                    </div>
                    <section className='locatizacao-result'>
                        <img src={localizador} alt="" srcSet="" />
                        <p>{hotel.city.name} - <span>MOSTRAR NO MAPA</span></p>
                    </section>
                    <div className='characteristics-result'>
                        <img className='icon-characteristics-result' src={wifi} alt="" />
                        <img className='icon-characteristics-result' src={natacao} alt="" />
                    </div>
                    <p className='description-result'>{hotel.description}  <span>mais...</span></p>
                </section>
                <section className="evaluation-result">
                    <div className='avaliacao'>
                        <h6>4.5</h6>
                        <p>Muito bom</p>
                    </div>
                    <div className='stars'>
                        <img src={starIcon} alt="" srcSet="" />
                        <img src={starIcon} alt="" srcSet="" />
                        <img src={starIcon} alt="" srcSet="" />
                        <img src={starIcon} alt="" srcSet="" />
                        <img src={starIcon} alt="" srcSet="" />
                    </div>
                </section>
            </div>
        </>
    )
}
