import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
    base:'/blog/',
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
            { text: '笔记', link: '/note/', activeMatch: '/note/' },
            { text: '闲谈', link: '/config/', activeMatch: '/config/' },
        ],

        sidebar: {
            '/note/': [
                {
                    text: '正则表达式',
                    link: '/note/regexp',
                },
                {
                    text: '设计模式',
                    items:[
                        {
                            text: '单例模式',
                            link: '/note/design/singleton',
                        }, 
                        {
                            text: '工厂模式',
                            link: '/note/design/factory',
                        },
                        {
                            text: '观察者模式',
                            link: '/note/design/observer',
                        },
                        {
                            text: '建造者模式',
                            link: '/note/design/builder',
                        },
                        {
                            text: '适配器模式',
                            link: '/note/design/adapter',
                        },
                        {
                            text: '装饰器模式',
                            link: '/note/design/decorator',
                        },
                        {
                            text: '外观模式',
                            link: '/note/design/facade',
                        },
                        {
                            text: '策略模式',
                            link: '/note/design/strategy',
                        },
                        {
                            text: '职责链模式',
                            link: '/note/design/chain',
                        },
                        {
                            text: '中介者模式',
                            link: '/note/design/mediator',
                        },
                    ]
                }
             
            ],
        }
    }
})
