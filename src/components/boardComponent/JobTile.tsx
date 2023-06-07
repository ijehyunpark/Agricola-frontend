import React from 'react';
import * as B from './BoardComponent';
import { JobProps } from '../../interface/interfaces';

export function JobBtn({ ...props }: JobProps) {
  return (
    <B.JobBtn>
      {/* {props.JobName} */}
      <img src={`img/house/majors_icon.jpeg`} alt='' style={{ width: '100%', height: '100%' }} />
      {/* <B.JobDetails>Here are the job details.</B.JobDetails> */}
    </B.JobBtn>
  );
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
