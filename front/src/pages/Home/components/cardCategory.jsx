import React from 'react';
import imgCardCategory from '../../../assets/pictures/img-card-category-hotel.svg'
import './index.scss';


export default function CardCategory() {
  return (
    <>
    <div className="container-category">

      <h2 className='title-container-category'>Buscar por tipo de acomodação</h2>
      <section className='container-card-category'>
        
            <div className="card-category" >
              <img src={imgCardCategory} alt="" srcset="" />
              <section className='contents-category'>
                <h2>Hotéis</h2>
                <p>807.105 hotéis</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={imgCardCategory} alt="" srcset="" />
              <section className='contents-category'>
                <h2>Hotéis</h2>
                <p>807.105 hotéis</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={imgCardCategory} alt="" srcset="" />
              <section className='contents-category'>
                <h2>Hotéis</h2>
                <p>807.105 hotéis</p>
              </section>
            </div>
            <div className="card-category" >
              <img src={imgCardCategory} alt="" srcset="" />
              <section className='contents-category'>
                <h2>Hotéis</h2>
                <p>807.105 hotéis</p>
              </section>
            </div>

      </section>
    </div>
    </>
  )
}
