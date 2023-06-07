import * as M from './ModalComponent';
import React, {useState} from 'react';

type resourceprops = {
  convert: number;
  resource: string;
};
// 받아야하는게
//종류, 변환될 갯수 number,
function ExchangeItem({ resource, convert}: resourceprops) {
  const [count, setCount] = useState(0)
  const onIncrease = () => {
    setCount(prevNumber => prevNumber + 1)
  }
  const onDecrease = () => {
    if (count > 0){
      setCount(prevNumber => prevNumber - 1)      
    };
  }
  return(
    <>
      <M.ExchageItem>
        <img src={`img/animal/${resource}.svg`}/> {/*동물일땐animal, 자원일땐resource */}
        <a> → </a>
        <img src='img/resource/food.svg'/>
        <a> * {convert}</a>
        <button onClick={() => onIncrease()}>+</button>
        <button onClick={() => onDecrease()}>-</button>
        <a>{count}</a>
      </M.ExchageItem>
    </>
  );
}

export default ExchangeItem;
