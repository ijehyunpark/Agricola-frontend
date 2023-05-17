import React from 'react';
import * as B from './BoardComponent';

interface HomeProps {
  HomeName: string;
  HomeType: string;
  numOfHome: number | string;
}

export function HomeTile({ ...props }: HomeProps) {
  return <B.Home>{props.HomeName}</B.Home>;
}

export function HomeArea() {
  return (
    <B.HomeTile>
      <B.HomeBtnWrapper>
        <B.HomeBtn></B.HomeBtn>
      </B.HomeBtnWrapper>

      <B.HomeContentWrapper>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'2'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'3'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
      </B.HomeContentWrapper>

      <B.HomeContentWrapper>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
      </B.HomeContentWrapper>

      <B.HomeContentWrapper>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        <HomeTile HomeName={'1'} HomeType={'1'} numOfHome={'1'}></HomeTile>
        {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
      </B.HomeContentWrapper>
    </B.HomeTile>
  );
}
