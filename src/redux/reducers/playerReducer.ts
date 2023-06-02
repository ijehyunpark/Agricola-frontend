import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerStatus {
  wood: number;
  clay: number;
  stone: number;
  reed: number;
  grain: number;
  vegetable: number;
  food: number;
  hungerToken: number;
  sheep: number;
  wildboar: number;
  cow: number;
  cattle: number; //외양간
  fence: number;
  family: number;
}
