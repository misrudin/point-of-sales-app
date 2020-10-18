import React from 'react';
import {ProductItem, ItemSearch} from '../../atoms';

const ProductItems = ({data, onPress, search = false}) => {
  return (
    <>
      {data?.map((item, i) => {
        if (search) {
          return (
            <ItemSearch key={i} item={item} onPress={() => onPress(item)} />
          );
        }
        return (
          <ProductItem key={i} item={item} onPress={() => onPress(item)} />
        );
      })}
    </>
  );
};

export default React.memo(ProductItems);
