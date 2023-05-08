import 'styled-components';

declare module 'styled-components' {
  // 우리가 아는 타입지정을 여기서 다해주고 불러서 쓰기

  // 1. 인터페이스 지정
  //export interface 인테페이스명지정 {
  //  속성1 : 타입지정;
  //}

  // 2. 타입속성지정
  //export type // 타입~~~지정지정해~

  // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성

  type fontSize = {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
  };

  type paddings = {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  type colors = {
    textPrimary: string;
    textSecondary: string;
    darkGray: string;
    bgPrimary: string;
    bgSecondary: string;
    tileNameBg: string;
    tileNameBorder: string;
    tileBg: string;
    border: string;
  };

  export interface DefaultTheme {
    fontSize: fonstSize;
    paddings: paddings;
    colors: colors;
    response: {};
  }
}
