import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//change to port localhost:3000

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
