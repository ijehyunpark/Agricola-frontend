import React from 'react';
import styled from 'styled-components';

interface Children {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function Main({ children }: Children) {
  return <Container>{children}</Container>;
}

export default Main;
