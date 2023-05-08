import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerStatus {
  wood: number;
  clay: number;
  stone: number;
  reed: number;
  cropSeed: number;
  vegetableSeed: number;
  food: number;
  hungerToken?: number;
  sheep: number;
  cow: number;
  pig: number;
  family: number;
  fence: number;
  cowshed: number; //외양간
}
