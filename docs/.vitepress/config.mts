import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { nav } from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "ying201's blog",
  titleTemplate: "Blog | :title",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    logo: "/logo.png",
    // siteTitle: false,
    socialLinks: [{ icon: "github", link: "https://github.com/ying201" }],
  },
});
