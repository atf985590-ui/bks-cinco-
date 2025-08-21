import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/bks-cincos-web/", // اسم المستودع على GitHub
});
