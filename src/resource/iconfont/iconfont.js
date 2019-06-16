import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1560529626973'); /* IE9 */
src: url('./iconfont.eot?t=1560529626973#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('./iconfont.woff?t=1560529626973') format('woff'),
url('./iconfont.ttf?t=1560529626973') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('./iconfont.svg?t=1560529626973#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

