// type theme object

import { Theme } from './config/theme';

// when using styled-components, we can use the theme object

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
