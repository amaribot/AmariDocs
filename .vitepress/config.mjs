import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AmariDocs",
  description: "Documentation for AmariBot API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Examples", link: "/" }],

    sidebar: [
      {
        text: "",
        items: [
          { text: "🤖 AmariBot - Documentation", link: "/" },
          { text: "🚀Getting Started", link: "/getting-started" },
          { text: "📝FAQ", link: "/faq" },
        ],
      },
      {
        text: "Features",
        items: [
          { text: "Announcements", link: "/features/announcements" },
          { text: "Message/Voice XP", link: "/features/xp" },
          { text: "Level Roles", link: "/features/level-roles" },
          { text: "Rank Cards", link: "/features/rank-cards" },
        ],
      },
      {
        text: "Extra Information",
        items: [{ text: "Updates", link: "/updates" }],
      },
      {
        text: "API Documentation",
        items: [
          {
            text: "/api/v1",
            items: [{ text: "Guild", link: "/v1/guild" }],
          },
          {
            text: "/api/v2",
            items: [
              { text: "Guild", link: "/v2/guild" },
              { text: "Member", link: "/v2/members" },
              { text: "User", link: "/v2/user" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/AmariBot" }],
  },
});
