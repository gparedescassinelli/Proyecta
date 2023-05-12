import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* import reactRefresh from '@vitejs/plugin-react-refresh'
import ssr from 'vite-plugin-ssr/plugin' */
export default defineConfig({
  plugins: [react()],
 /*  plugins: [ reactRefresh(),
    ssr(),], */
})
