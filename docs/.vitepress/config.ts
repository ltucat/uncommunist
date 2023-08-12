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
      {
        text: "第二章：有能力的个人",
        link: "/2-competent-individual",
      },
      {
        text: "第三章：资本主义的幽灵变种",
        link: "/3-capitalism-variation",
      },
      {
        text: "第四章：个人与国家的关系",
        link: "/4-individual-state",
      },
      {
        text: "后序",
        link: "/afterword",
      },
      {
        text: "关于作者",
        link: "/about-authors",
      },
      {
        text: "补充内容",
        link: "/bonus-materials",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ltucat/uncommunist" },
      { icon: "twitter", link: "https://twitter.com/@ltucat" },
    ],
  },
});
