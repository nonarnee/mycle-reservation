import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from '@toss/use-overlay';

import { Routes } from './pages/Routes';
import GlobalStyles from './GlobalStyles';
import { theme } from './styles/theme';
import { PageLayout } from './pages/PageLayout';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageLayout>
          <OverlayProvider>
            <Routes />
          </OverlayProvider>
        </PageLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
