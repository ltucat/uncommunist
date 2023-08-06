import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "反共产主义者宣言",
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
        text: "前言",
        link: "/preface",
      },
      {
        text: "术语定义",
        link: "/definitions",
      },
      {
        text: "第一章：静态和动态的阶级",
        link: "/1-static-dynamic-classes",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
