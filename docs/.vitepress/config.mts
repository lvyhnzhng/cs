import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS study",
  description: "Record cs learning",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/cs/favicon.png' }]],
  base: '/cs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          {
            text: 'algorithm',
            collapsed: true,
            items: [
              {
                text: 'sliding window',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/sliding-window/sliding-window' },
                  { text: '1456. Maximum Number of Vowels in a Substring of Given Length', link: '/algorithm/sliding-window/lc1456' },
                ]
              },
              {
                text: 'data structure series',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/data-structure/data-structure' },
                ]
              },
            ]
          },
          {
            text: 'system design',
            collapsed: false,
            items: [
              { text: 'load balancer', link: '/system-design/system-design' }]
          },
          {
            text: 'Frontend',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/frontend/frontend' },
              { text: 'React', link: '/frontend/react' }]
          }

        ]
      },
    ],




    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvyhnzhng/cs' }
    ]
  }
})
