import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8003',  // Backend server URL
  //       changeOrigin: true,               // Change the origin of the host header to the target URL
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
  //     },
  //   },
  // },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8003'
  //   }
  // },
})
