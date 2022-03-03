import React from 'react';
import hotel from '../../../assets/pictures/hotel.svg';
import hotels from '../../../assets/pictures/hotels.svg'
import cama from '../../../assets/pictures/apartamentos.svg'
import ap from '../../../assets/pictures/cama.svg'
import categoria from '../../../util/category.json';
import './index.scss';

export default function CardCategory() {
  return (
    <>
    <div className="container-category">

      <h2 className='title-container-category'>Buscar por tipo de acomodação</h2>
      <section className='container-card-category'>
        
            <div className="card-category" >
              <img src={hotel} alt="" srcset="" />
              <section className='contents-category'>
                <h2>{categoria[0].nome}</h2>
                <p>{categoria[0]['n-hoteis']}</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={hotels} alt="" srcset="" />
              <section className='contents-category'>
                <h2>{categoria[1].nome}</h2>
                <p>{categoria[1]['n-hoteis']}</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={ap} alt="" srcset="" />
              <section className='contents-category'>
                <h2>{categoria[2].nome}</h2>
                <p>{categoria[2]['n-hoteis']}</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={cama} alt="" srcset="" />
              <section className='contents-category'>
                <h2>{categoria[3].nome}</h2>
                <p>{categoria[3]['n-hoteis']}</p>
              </section>
            </div>

      </section>
    </div>
    </>
  )
}
