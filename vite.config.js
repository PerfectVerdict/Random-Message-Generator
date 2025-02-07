import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/message': {
        target: process.env.BACKEND_URL || 'http://localhost:5000', // Use env variable for production
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

