import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Icons from "vite-plugin-react-svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    Icons({
      defaultExport: "component",
    }),
  ],
});
