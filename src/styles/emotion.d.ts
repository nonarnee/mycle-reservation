import '@emotion/react';
import type { AppTheme } from './theme';

declare module '@emotion/react' {
  export type Theme = AppTheme;
}
