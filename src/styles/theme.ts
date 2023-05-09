import styled, { css, DefaultTheme } from 'styled-components';

const fontSize = {
  xs: '0.5rem',
  sm: '0.75rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '2.0rem',
};

const paddings = {
  xs: '0.25rem',
  sm: '0.5rem',
  base: '0.75rem',
  lg: '1.0rem',
  xl: '1.5rem',
  xxl: '2.0rem',
  xxxl: '3.0rem',
};

const colors = {
  textPrimary: `#000`,
  textSecondary: `rgb(120, 120, 120)`, //787878
  darkGray: `rgb(170, 170, 170)`, //AAAAA
  bgPrimary: `rgb(238, 238, 238)`, //EEEEE
  bgSecondary: `rgb(217, 217, 217)`, //D9D9D9
  tileNameBg: `rgb(247, 245, 225)`,
  tileNameBorder: `rgb(189, 159, 98)`,
  tileBg: `rgb(234, 230, 159)`,
  border: `rgb(255,255,255)`,
};

export const defaultTheme: DefaultTheme = {
  fontSize,
  paddings,
  colors,
  response: {},
};
