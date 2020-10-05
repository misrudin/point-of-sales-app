import React from 'react';
import {ProductItem} from '../../atoms';

const ProductItems = ({data, onPress}) => {
  return (
    <>
      {data?.map((item, i) => {
        return (
          <ProductItem key={i} item={item} onPress={() => onPress(item)} />
        );
      })}
    </>
  );
};

export default React.memo(ProductItems);
