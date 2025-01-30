import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";  // path 모듈 추가
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),  // 경로 설정
    },
  },
});
