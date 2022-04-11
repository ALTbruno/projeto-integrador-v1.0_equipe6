import RecomendationList from '../../components/recomendationList';
import CardCategory from './components/cardCategory'
import Search from '../../components/search';
import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
      <Search />
      <CardCategory />
      <Link to={'/criacaoProdutos'}>Caminho CriacaoProdutos</Link>
      <RecomendationList />
    </>
  );
}
export default Home;