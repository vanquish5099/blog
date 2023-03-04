import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
    base:'/base/',
    title: `仙童`,
    description: `童子的小屋`,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#646cff' }],
    ],
    vue: {
        reactivityTransform: true,
    },
    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: '笔记', link: '/guide/', activeMatch: '/guide/' },
            { text: '闲谈', link: '/config/', activeMatch: '/config/' },
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'APIs',
                    items: [
                        {
                            text: 'Plugin API',
                            link: '/guide/api-plugin',
                        },
                        {
                            text: 'HMR API',
                            link: '/guide/api-hmr',
                        },
                        {
                            text: 'JavaScript API',
                            link: '/guide/api-javascript',
                        },
                        {
                            text: 'Config Reference',
                            link: '/config/',
                        },
                    ],
                }
            ]
        }
    }
})
