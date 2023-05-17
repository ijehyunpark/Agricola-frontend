import React from 'react';
import * as B from './BoardComponent';

interface JobProps {
  JobName: string;
  JobType: string;
  numOfJob: number | string;
}

export function JobBtn({ ...props }: JobProps) {
  return <B.JobBtn>{props.JobName}</B.JobBtn>;
}

export function JobArea() {
  return (
    <B.JobBtnWrapper>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'2 '} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'3'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      <JobBtn JobName={'1'} JobType={'1'} numOfJob={'1'}></JobBtn>
      {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
    </B.JobBtnWrapper>
  );
}
