import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services';
import './index.scss';

export default function CardCategory() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/categories').then(response => {
      setCategories(response.data);
    })
  }, []);

  return (
    <>
      <div className="container-category">

        <h2 className='title-container-category'>Buscar por tipo de acomodação</h2>
        <section className='container-card-category'>
          {categories.map(category => (
            <div onClick={() => navigate(`/category/${category.title}`)} className="card-category" key={category.id} >
              <img src={category.imageUrl} alt={category.imageUrl} srcset="" />
              <section className='contents-category'>
                <h2>{category.title}</h2>
                <p>807.105</p> {/*quantidade de acomodações*/}
              </section>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
