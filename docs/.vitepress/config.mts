import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { nav } from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "ying201's blog",
  titleTemplate: "Blog | :title",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "MX1eK0VRiaFy3YQBfQ7A6QjscbHdiEyTAj10C2-UBu0",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    logo: "/logo.png",
    // siteTitle: false,
    socialLinks: [{ icon: "github", link: "https://github.com/ying201" }],
    editLink: {
      pattern:
        "https://github.com/ying201/ying201.github.io/edit/main/docs/:path",
    },
    footer: {
      // message:
      //   'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/ying201">ying201</a>',
    },
  },
  lastUpdated: true,
  // 当设置为 true 时，VitePress 不会因为死链而导致构建失败
  ignoreDeadLinks: true,
  metaChunk: true,
  sitemap: {
    hostname: "https://ying201.github.io/",
  },
});
