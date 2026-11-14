import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: ['chrome87', 'edge88', 'firefox78', 'safari14'],
  },
});
