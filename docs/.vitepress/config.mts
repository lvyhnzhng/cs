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
                text: 'data structure series',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/data-structure/data-structure' },
                ]
              },
              {
                text: 'two-pointer',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/two-pointers/two-pointers' },
                ]
              },
              {
                text: 'sliding window',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/sliding-window/sliding-window' },
                  { text: '1456. Maximum Number of Vowels in a Substring of Given Length', link: '/algorithm/sliding-window/lc1456' },
                ]
              },
              {
                text: 'binary search',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/binary-search/binary-search' },
                ]
              },
              {
                text: 'monotonic-stack',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/monotonic-stack/monotonic-stack' },
                ]
              },
              {
                text: 'greedy',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/greedy/greedy' },
                ]
              },
              {
                text: 'linkedlist',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/linkedlist/linkedlist' },
                ]
              },
              {
                text: 'tree-backtracking',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/tree-backtracking/tree-backtracking' },
                ]
              },
              {
                text: 'graph',
                collapsed: true,
                items: [
                  { text: 'Summary', link: '/algorithm/graph/graph' },
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
