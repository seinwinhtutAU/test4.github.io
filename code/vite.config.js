import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/midterm1/midterm-quotation-app/",
  plugins: [react()],
});
