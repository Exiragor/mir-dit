import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import fs from "fs";

export default defineConfig({
  plugins: [
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
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
        },
        {
          entry: "src/main.js",
          filename: "about.html",
          template: "about.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
        {
          entry: "src/main.js",
          filename: "admin.html",
          template: "admin.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
        {
          entry: "src/main.js",
          filename: "analytic.html",
          template: "analytic.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
        {
          entry: "src/main.js",
          filename: "contacts.html",
          template: "contacts.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
        {
          entry: "src/main.js",
          filename: "oracle.html",
          template: "oracle.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
        {
          entry: "src/main.js",
          filename: "security.html",
          template: "security.html",
          injectOptions: {
            data: {
              title: "Мир данных ИТ",
              headerNav: fs.readFileSync("./src/components/header-nav.html"),
              footer: fs.readFileSync("./src/components/footer.html"),
              form: fs.readFileSync("./src/components/form.html"),
              formBig: fs.readFileSync("./src/components/form-big.html"),
            },
          },
          
        },
      ],
    }),
  ],
});
