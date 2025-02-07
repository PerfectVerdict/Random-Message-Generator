import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/message': 'http://localhost:5000', // Proxy API requests to your Express backend
    },
  },
});

