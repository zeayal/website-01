import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mapToken } from './staticCustomer';
console.log('mapToken', mapToken)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: mapToken,
        javascriptEnabled: true,
      }
    }
  }
})
