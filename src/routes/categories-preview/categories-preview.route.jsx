import { useCategoriesGlobalContext } from '../../context/categories.context';
import { CategoryPreview } from '../../components';

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesGlobalContext();
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
