import React from 'react';
import {ProductItem} from '../../atoms';

const ProductItems = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((_, i) => {
        return <ProductItem />;
      })}
    </>
  );
};

export default React.memo(ProductItems);
