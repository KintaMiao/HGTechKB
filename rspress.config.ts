import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '浙江省杭州高级中学 技术学科知识库',
  description: '本知识库服务于浙江省杭州高级中学选考技术学科的学生，包含信息技术和通用技术两部分内容，并优先专注于信息技术知识的梳理。',
  icon: '/HG.webp',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
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
              text: '排序算法',
              items: [
                {
                  text: '冒泡排序',
                  link: '/information-technology/algorithms/sorting/bubble-sort',
                },
              ],
            },
            {
              text: '查找算法',
              items: [
                {
                  text: '二分查找（对分查找）',
                  link: '/information-technology/algorithms/searching/binary-search',
                },
              ],
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
    ],
  },
});
