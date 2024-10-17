import { defineConfig } from "vitepress";

const sidebarUncommunist = () => {
  return [
    {
      text: "非共产主义者宣言",
      items: [
        {
          text: "译者序",
          link: "/translator-preface",
        },
        {
          text: "致谢",
          link: "/acknowledgments",
        },
        {
          text: "序",
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
    },
  ];
};

const sidebarMaosAmerica = () => {
  return [
    {
      text: "毛泽东式的美国",
      items: [
        {
          text: "序",
          link: "/preface",
        },
        {
          text: "前言",
          link: "/introduction",
        },
        {
          text: "第一章：离开厨房的餐桌",
          link: "/01",
        },
        {
          text: "第二章：在毛统治的中国长大",
          link: "/02",
        },
        {
          text: "第三章：自由之地",
          link: "/03",
        },
        {
          text: "第四章：两次文化大革命",
          link: "/04",
        },
        {
          text: "第五章：生而有罪 - 意识形态是如何分裂的",
          link: "/05",
        },
        {
          text: "第六章：红卫兵 - 革命的突击队",
          link: "/06",
        },
        {
          text: "第七章：文化清洗 - 一场对旧世界的战争",
          link: "/07",
        },
        {
          text: "第八章：家庭结构的解体",
          link: "/08",
        },
        {
          text: "第九章：宗教信仰的消亡",
          link: "/09",
        },
        {
          text: "第十章：塑造新人 - 思想意识的灌输",
          link: "/10",
        },
        {
          text: "后记：一个警告",
          link: "/epilogue",
        },
        {
          text: "致谢",
          link: "/acknowledgements",
        },
      ],
    },
  ];
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "反共产主义",
  description: "Communism never failed to fail",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "博客",
        link: "https://blog.uncommunist.org",
      },
      {
        text: "源泉出版社",
        link: "https://randpress.com",
      },
    ],

    sidebar: {
      "/uncommunist/": { base: "/uncommunist", items: sidebarUncommunist() },
      "/maosamerica/": { base: "/maosamerica", items: sidebarMaosAmerica() },
    },

    socialLinks: [{ icon: "twitter", link: "https://x.com/@taowanusa" }],
  },
});
