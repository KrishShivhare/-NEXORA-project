import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const rawBase = process.env.BASE_URL || '/NEXORA/';
  const base = mode === 'development' ? '/' : (rawBase.endsWith('/') ? rawBase : `${rawBase}/`);

  return {
    base,
    plugins: [react()],
    server: {
      port: 3000,
      open: false
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    }
  };
});

