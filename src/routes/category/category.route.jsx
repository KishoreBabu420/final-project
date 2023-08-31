import './category.styles.scss';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useCategoriesGlobalContext } from '../../context/categories.context';
import { ProductCard } from '../../components';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesGlobalContext();

  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log('hit');
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className='category-title'>{category}</h2>
      <div className='product-category-container'>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    </>
  );
};

export default Category;
