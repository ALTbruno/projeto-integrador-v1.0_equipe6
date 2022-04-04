import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardResult from '../../components/cardResult/cardResult';
import api from '../../services';

export default function ResultByCategory() {
  const [hoteis, setHoteis] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    api.get(`/products/category=${category}`).then(response => {
      setHoteis(response.data);
    })
  }, [category])

  return (
    <>
      <section className='container-results' >
        <div className='container-cards'>
          <div className='title-container-results'>
            <p>Nossos produtos em <span>{category}</span>:</p>
          </div>
          {hoteis.length > 0 ?
            hoteis.map(hotel => (
              <CardResult key={hotel.id} item={hotel} />
            )) : <p>Ops sem hoteis nesta categoria</p>}
        </div>
      </section>
    </>
  )
}
