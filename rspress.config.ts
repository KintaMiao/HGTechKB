import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '浙江省杭州高级中学 技术学科知识库',
  description: '本知识库服务于浙江省杭州高级中学选考技术学科的学生，包含信息技术和通用技术两部分内容，并优先专注于信息技术知识的梳理。',
  icon: '/HG.webp',
  logo: {
    light: '/hgbanner-light.webp',
    dark: '/hgbanner-dark.webp',
  },
  // SEO优化
  lang: 'zh-CN',
  // 性能优化
  mediumZoom: true,
  search: {
    codeBlocks: true,
  },
  // 路由优化
  route: {
    cleanUrls: true,
  },
  // 全局组件
  globalUIComponents: [
    path.join(__dirname, 'docs/components/PerformanceOptimizer.tsx'),
  ],
  themeConfig: {
    // 启用最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    // 启用回到顶部按钮
    enableScrollToTop: true,
    // 启用页面切换动画
    enableContentAnimation: true,
    // 搜索配置
    searchPlaceholderText: '搜索文档',
    searchNoResultsText: '没有找到相关结果',
    searchSuggestedQueryText: '请尝试使用其他关键词',
    // 页面导航文本
    prevPageText: '上一页',
    nextPageText: '下一页',
    outlineTitle: '本页目录',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/KintaMiao/HGTechKB', // 请替换为实际的GitHub链接
      },
    ],
    sidebar: {
      '/information-technology/': [
        {
          text: '信息技术基础知识',
          items: [
            {
              text: '信息系统、支撑技术与信息安全',
              link: '/information-technology/basic-knowledge/information-systems-support-security',
            },
            {
              text: '数据采集与编码',
              link: '/information-technology/basic-knowledge/data-acquisition-encoding',
            },
            {
              text: '数据、信息、大数据及人工智能',
              link: '/information-technology/basic-knowledge/data-information-bigdata-ai',
            },
          ],
        },
        {
          text: '算法',
          items: [
            {
              text: '算法概览',
              link: '/information-technology/algorithms/',
            },
            {
              text: '算法基础概念与效率',
              link: '/information-technology/algorithms/algorithm-concepts/efficiency-and-concepts',
            },
            {
              text: '基本算法',
              items: [
                {
                  text: '迭代算法',
                  link: '/information-technology/algorithms/basic-algorithms/iterative-algorithm',
                },
                {
                  text: '递归算法',
                  link: '/information-technology/algorithms/basic-algorithms/recursive-algorithm',
                },
              ],
            },
            {
              text: '查找算法',
              items: [
                {
                  text: '顺序查找',
                  link: '/information-technology/algorithms/searching/sequential-search',
                },
                {
                  text: '二分查找（对分查找）',
                  link: '/information-technology/algorithms/searching/binary-search',
                },
              ],
            },
            {
              text: '排序算法',
              items: [
                {
                  text: '冒泡排序',
                  link: '/information-technology/algorithms/sorting/bubble-sort',
                },
                {
                  text: '选择排序',
                  link: '/information-technology/algorithms/sorting/selection-sort',
                },
                {
                  text: '插入排序',
                  link: '/information-technology/algorithms/sorting/insertion-sort',
                },
              ],
            },
          ],
        },
        {
          text: 'Python 基础知识',
          items: [
            {
              text: 'Python 基础知识概览',
              link: '/information-technology/programming-languages/python/',
            },
            {
              text: 'Python 基础知识字典',
              link: '/information-technology/programming-languages/python/python-basic-dictionary',
            },
            {
              text: 'Pandas 与 Matplotlib',
              link: '/information-technology/programming-languages/python/python-pandas-matplotlib',
            },
            {
              text: '数组',
              link: '/information-technology/programming-languages/python/data-structures/arrays',
            },
            {
              text: '字符串',
              link: '/information-technology/programming-languages/python/data-structures/strings',
            },
            {
              text: '队列',
              link: '/information-technology/programming-languages/python/data-structures/queues',
            },
            {
              text: '栈',
              link: '/information-technology/programming-languages/python/data-structures/stacks',
            },
            {
              text: '树',
              link: '/information-technology/programming-languages/python/data-structures/trees',
            },
          ],
        },
      ],
      '/general-technology/': [
        // 待定
      ],
    },
    nav: [
      {
        text: '信息技术',
        link: '/information-technology/basic-knowledge/information-systems-support-security', // 默认指向第一个基础知识页面
        activeMatch: '/information-technology/',
      },
      {
        text: '通用技术',
        link: '/general-technology/', // 待定
        activeMatch: '/general-technology/',
      },
      {
        text: 'AI 智能助手',
        link: '/ai-assistant',
      },
    ],
    // 页脚配置
    footer: {
      message: '© 2024 浙江省杭州高级中学 技术学科知识库<br/>本知识库内容仅供学习参考使用',
    },
  },
  // SEO优化 - 添加meta标签
  head: [
    ['meta', { name: 'keywords', content: '信息技术,通用技术,算法,Python,编程,杭州高级中学' }],
    ['meta', { name: 'author', content: '浙江省杭州高级中学' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '浙江省杭州高级中学 技术学科知识库' }],
    ['meta', { property: 'og:description', content: '本知识库服务于浙江省杭州高级中学选考技术学科的学生，包含信息技术和通用技术两部分内容' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
});
