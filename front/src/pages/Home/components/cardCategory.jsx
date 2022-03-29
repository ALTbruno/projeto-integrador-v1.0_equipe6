import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import api from '../../../services';
import './index.scss';

export default function CardCategory() {
  const [categories, setCategories] = useState([]);
  const [largeWidth, setLargeWidth] = useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    window.innerWidth > 1100 ? setLargeWidth(true) : setLargeWidth(false)  
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setLargeWidth(true)
      } else {
        setLargeWidth(false)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  useEffect(() => {
    api.get('/categories').then(response => {
      separar(response.data, 3);
    })
  }, []);

  const separar = (base, maximo) => {
    var resultado = [[]];
    var grupo = 0;

    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }

      resultado[grupo].push(base[indice]);

      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
    setCategories(resultado);
  }


  return (
    <>
      <div className="container-category">

        <h2 className='title-container-category'>Buscar por tipo de acomodação</h2>
        {largeWidth ?
          <Carousel variant="dark" className='container-card-category'>
            {categories.map(item => (
              <Carousel.Item key={item.id}>
                {item.map(category => (
                  <div onClick={() => navigate(`/category/${category.title}`)} className="card-category" key={category.id} >
                    <img src={category.imageUrl} alt={category.imageUrl} srcset="" />
                    <section className='contents-category'>
                      <h2>{category.title}</h2>
                      <p>{category.totalProducts}</p>
                    </section>
                  </div>
                ))}
              </Carousel.Item>
            ))}
          </Carousel>
          :
          <Carousel variant="dark" className='container-card-category'>
            {categories.map(item => (
              item.map(category => (
                <Carousel.Item key={category.id}>
                  <div onClick={() => navigate(`/category/${category.title}`)} className="card-category" key={category.id} >
                    <img src={category.imageUrl} alt={category.imageUrl} srcset="" />
                    <section className='contents-category'>
                      <h2>{category.title}</h2>
                      <p>807.105</p> {/*quantidade de acomodações*/}
                    </section>
                  </div>
                </Carousel.Item>
              ))
            ))}
          </Carousel>}
      </div>
    </>
  )
}
