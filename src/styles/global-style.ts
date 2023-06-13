import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import NexonLv2GothicBold from '../fonts/NexonLv2GothicBold.woff';
import NexonLv2GothicLight from '../fonts/NexonLv2GothicLight.woff';
import NexonLv2Gothic from '../fonts/NexonLv2Gothic.woff';
import MaplestoryBold from '../fonts/MaplestoryBold.ttf';
import MaplestoryLight from '../fonts/MaplestoryLight.ttf';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
        font-family: 'NexonLv2GothicBold';
        src: local('NexonLv2GothicBold'), local('NexonLv2GothicBold');
        font-style: normal;
        src: url(${NexonLv2GothicBold}) format('truetype');
  } 

  @font-face {
        font-family: 'NexonLv2GothicLight';
        src: local('NexonLv2GothicLight'), local('NexonLv2GothicLight');
        font-style: normal;
        src: url(${NexonLv2GothicLight}) format('truetype');
  } 

  @font-face {
        font-family: 'MaplestoryBold';
        src: local('MaplestoryBold'), local('MaplestoryBold');
        font-style: normal;
        src: url(${MaplestoryBold}) format('truetype');
  } 
  @font-face {
        font-family: 'MaplestoryLight';
        src: local('MaplestoryLight'), local('MaplestoryLight');
        font-style: normal;
        src: url(${MaplestoryLight}) format('truetype');
  } 

  body{
    margin:0;
    padding:0;
    font-family: MapleStoryLight;
  }

  button {
    font-family: MapleStoryLight;
  }
`;
