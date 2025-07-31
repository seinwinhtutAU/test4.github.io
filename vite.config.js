import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test4.github.io/midterm-quotation-app/",
  plugins: [react()],
});
