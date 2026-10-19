import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    open: false,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Automatically code-split each book data folder (and chapter pair) into dedicated chunks
          const match = id.match(/src[\\/]data[\\/]books[\\/]([^\\/]+)[\\/]([^\\/.]+)/);
          if (match) {
            const bookSlug = match[1];
            const part = match[2];
            return `book-${bookSlug}-${part}`;
          }
        },
      },
    },
  },
});
