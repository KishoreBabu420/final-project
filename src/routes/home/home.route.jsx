import './root.style.scss';

import { Directory } from '../../components';

import { categories } from '../../constants';

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
