import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from '@toss/use-overlay';

import { Routes } from './pages/Routes';
import GlobalStyles from './GlobalStyles';
import { theme } from './styles/theme';
import { queryClient } from './lib/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <OverlayProvider>
          <Routes />
        </OverlayProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
