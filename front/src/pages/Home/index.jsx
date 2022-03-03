import RecomendationList from '../../components/recomendationList';
import CardCategory from './components/cardCategory'
import Search from '../../components/search';


const Home = () => {
  return (
    <>
      <Search />
      <CardCategory />
      <RecomendationList />
    </>
  );
}
export default Home;