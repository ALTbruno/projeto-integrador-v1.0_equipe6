import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardResult from '../cardResult/cardResult';
import api from '../../services/index';
import './index.scss';

export default function ResultByCity() {
  const [hoteis, setHoteis] = useState([]);
  const { city } = useParams();


  useEffect(() => {
    api.get(`products/city=${city}`).then(response => {
      setHoteis(response.data.content);
    })
  }, [city])

  return (
    <>
      <section className='container-results' >
        <div className='container-cards'>
          <div className='title-container-results'>
            <p>Hoteis em <span>{city}</span>:</p>
          </div>
          {hoteis.length > 0 ?
            hoteis.map(hotel => (
              <CardResult key={hotel.id} item={hotel} />
            )) : <p>Ops sem hoteis nesta região</p>}
        </div>
      </section>
    </>
  )
}
