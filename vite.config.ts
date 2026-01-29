import { defineConfig } from 'vite';
import { default as solid } from 'vite-plugin-solid';
import { default as path } from 'path';

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
