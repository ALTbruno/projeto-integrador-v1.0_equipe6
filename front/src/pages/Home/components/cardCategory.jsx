import React, { useEffect, useState } from 'react';
import api from '../../../services';
import './index.scss';

export default function CardCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api.get('/category').then(response => {
      setCategory(response.data);
    })
  }, []);

  return (
    <>
      <div className="container-category">

        <h2 className='title-container-category'>Buscar por tipo de acomodação</h2>
        <section className='container-card-category'>
          {category.map(item => (
            <div className="card-category" key={item.description} >
              <img src={item.imageUrl} alt={item.imageUrl} srcset="" />
              <section className='contents-category'>
                <h2>{item.description}</h2> {/*falta nome da categoria no JSON*/}
                <p>807.105</p> {/*quantidade de acomodações*/}
              </section>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
