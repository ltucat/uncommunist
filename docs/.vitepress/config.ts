import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "反共产主义宣言",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "开始阅读", link: "/acknowledgments" },
    ],

    sidebar: [
      {
        text: "致谢",
        link: "/acknowledgments",
      },
      {
        text: "第一章",
        items: [
          {
            text: "abc",
            link: "/abc",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
