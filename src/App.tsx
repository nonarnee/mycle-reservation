import { ThemeProvider } from '@emotion/react';

import { Routes } from './pages/Routes';
import GlobalStyles from './GlobalStyles';
import { theme } from './styles/theme';
import { PageLayout } from './pages/PageLayout';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageLayout>
        <Routes />
      </PageLayout>
    </ThemeProvider>
  );
}
