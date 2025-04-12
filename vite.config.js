import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import fs from "fs";

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteEjsPlugin(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: "src/main.js",
          filename: "index.html",
          template: "index.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
            },
          },
        },
      ],
    }),
  ],
});
