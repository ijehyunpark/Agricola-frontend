import * as M from './ModalComponent';
import React, { useState } from 'react';

type resourceprops = {
  convert: number;
  resource: string;
};
// 받아야하는게
//종류, 변환될 갯수 number,
function ExchangeItem({ resource, convert }: resourceprops) {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    setCount((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    if (count > 0) {
      setCount((prevNumber) => prevNumber - 1);
    }
  };
  return (
    <>
      <M.ExchageItem>
        <img src={`img/${resource}.svg`} alt='' /> →
        <img src='img/resource/food.svg' alt='' /> * {convert}
        <button onClick={() => onIncrease()}>+</button>
        <button onClick={() => onDecrease()}>-</button>
        {count}
      </M.ExchageItem>
    </>
  );
}

export default ExchangeItem;
