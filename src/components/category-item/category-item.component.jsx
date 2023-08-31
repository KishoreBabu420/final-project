import './category-item.styles.scss';

import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const navigateHandler = (category) => {
    navigate(`/shop/${category.toLowerCase()}`);
  };
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div
        className='category-body-container'
        onClick={() => navigateHandler(title)}
      >
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
