import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/pages': '/src/pages',
      '@/utils': '/src/utils',
      '@/hooks': '/src/hooks',
      '@/assets': '/src/assets',
      '@/styles': '/src/styles',
    },
  },
});
