import React from 'react';
import './index.scss';
import calendar from '../../assets/icons/calendar.svg';
import localizador from '../../assets/icons/localizador.svg';

export default function Search() {
  return (
    <>
      <section id='container-search'>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <div className='inputs' >
          <div className="container-destino">
          <a>
              <img id='calendar' src={localizador} alt="" />
            </a>
            <input type="text" placeholder='Onde vamos?' />
          </div>
          <div className="container-date">
            <a>
              <img id='calendar' src={calendar} alt="" />
            </a>
            <input type="text" placeholder='Check in-Check out' />
          </div>
          <button>Buscar</button>
        </div>
      </section>
    </>
  )
}
