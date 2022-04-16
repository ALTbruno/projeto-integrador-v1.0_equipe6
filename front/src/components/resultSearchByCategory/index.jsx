import React, { useState, useEffect } from 'react';
import Pagination from '../pagination';
import { useParams } from 'react-router-dom';
import CardResult from '../../components/cardResult/cardResult';
import api from '../../services';

export default function ResultByCategory() {
  const [hoteis, setHoteis] = useState([]);
  const hoteisPage = {
    content: hoteis,
    last: false,
    totalPages: '...',
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: false,
  };
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState(hoteisPage);
  const { category } = useParams();

  useEffect(() => {
    api.get(`/products/category=${category}?size=2&page=${pageNumber}`).then(response => {
      console.log(response)
      setPage(response.data);
      setHoteis(response.data.content);
    }).catch((error) => {
      console.log(error)
    })
  }, [category, pageNumber])

  const handlePageChange = (newNumber) => {
    setPageNumber(newNumber);
  };

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
        <Pagination page={page} onChange={handlePageChange} />
      </section>
    </>
  )
}

