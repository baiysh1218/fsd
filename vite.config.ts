import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      proxy: {},
    },
    plugins: [
      svgr(),
      react(),
      tsconfigPaths(),
      splitVendorChunkPlugin(),
      visualizer({
        open: true,
        filename: "stats.html",
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@providers": path.resolve(__dirname, "./src/providers"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          additionalData: `
           @use "@app/styles/variable/index.scss" as *;
           @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          `,
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "@tanstack/react-virtual"],
    },
    build: {
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
      outDir: "dist",
      emptyOutDir: true,
      cssMinify: isDev ? false : "esbuild",
      minify: isDev ? false : "esbuild",
    },
    define: {
      global: {},
      "process.env.AWS_REGION": JSON.stringify(env.AWS_REGION),
      "process.env.USER_POOL_ID": JSON.stringify(env.USER_POOL_ID),
      "process.env.USER_POOL_CLIENT_ID": JSON.stringify(
        env.USER_POOL_CLIENT_ID
      ),
      "process.env.IDENTITY_POOL_ID": JSON.stringify(env.IDENTITY_POOL_ID),
    },
  };
});
