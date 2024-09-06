import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'AmariBot',
  description: 'Documentation for using AmariBot and the public API',
  srcDir: './docs',
  themeConfig: {
    sidebar: [
      {
        text: '',
        items: [
          { text: '🤖 AmariBot - Documentation', link: '/' },
          { text: '🚀Getting Started', link: '/getting-started' },
          { text: '📝FAQ', link: '/faq' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Announcements', link: '/features/announcements' },
          { text: 'Message/Voice XP', link: '/features/xp' },
          { text: 'Level Roles', link: '/features/level-roles' },
          { text: 'Rank Cards', link: '/features/rank-cards' },
        ],
      },
      {
        text: 'Extra Information',
        items: [{ text: 'Updates', link: '/updates' }],
      },
      {
        text: 'API Documentation',
        items: [
          {
            text: '/api/v1',
            items: [
              { text: 'Information', link: '/api/v1/information' },
              { text: 'Guild', link: '/api/v1/guild' },
              { text: 'Member', link: '/api/v1/member' },
            ],
          },
          // {
          //   text: '/api/v2',
          //   items: [
          //     { text: 'Guild', link: '/api/v2/guild' },
          //     { text: 'Member', link: '/api/v2/members' },
          //     { text: 'User', link: '/api/v2/user' },
          //   ],
          // },
        ],
      },
      {
        text: '🔗 Quick Links',
        items: [
          { text: 'Support Server', link: 'https://AmariBot.com/support' },
          { text: '', link: '/faq' },
          { text: '', link: '/faq' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AmariBot/AmariDocs' },
    ],
    footer: {
      copyright:
        'Copyright © 2024 - present <a href="https://AmariBot.com">AmariBot.com</a>',
    },
    lastUpdated: {
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
    },
    editLink: {
      pattern: 'https://github.com/AmariBot/AmariDocs/edit/main/docs/:path',
    },
    search: { provider: 'local' },
  },
  lastUpdated: true,
});
