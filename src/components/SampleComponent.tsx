import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement, incrementByAmount } from '../redux/reducers/sampleReducer';

import styled from 'styled-components';

const SampleBtn = styled.button<{ height: string | number; width: string | number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: #000;
  background-color: #adf;
  border: 1px solid gray;
  margin: 0 10px;
`;

const SampleSpan = styled.span`
  font-size: 32px;
  padding: 5px;
  color: 'red';
`;

function SampleComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const addNumber = () => {
    dispatch(increment());
  };
  const minusNumber = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <SampleSpan>{count}</SampleSpan>
      <SampleBtn width={75} height={50} onClick={addNumber}>
        Increment
      </SampleBtn>
      <SampleBtn width={100} height={75} onClick={minusNumber}>
        Decrement
      </SampleBtn>
    </div>
  );
}

export default SampleComponent;
