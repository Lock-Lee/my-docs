import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Thirawut Khanphan",
  description: "Advanced VitePress Example",
  head: [
    [
      "script",
      {
        src: "https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js",
      },
    ],
  ],

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/your-username/your-repo" },
    ],
    // nav: [{ text: "Layouts", link: "/layouts/" }],
    sidebar: {
      "/layouts/": [
        {
          text: "About Me",
          items: [
            { text: "Resume EN", link: "/layouts/en" },
            { text: "Resume TH", link: "/layouts/th" },
          ],
        },
        {
          text: "Work",
          items: [{ text: "Todo List", link: "layouts/todo-list" }],
        },
      ],
    },
    outline: [2, 3], // right TOC
    outlineTitle: "On this page",
  },
});
