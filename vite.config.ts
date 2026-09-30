import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? '/My_portfolio_website/' : '/',
  build: { sourcemap: true },
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', css: true },
}));
