import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    starlight({
      title: '浙江省杭州高级中学 技术学科知识库',
      description: '本知识库服务于浙江省杭州高级中学选考技术学科的学生，包含信息技术和通用技术两部分内容，并优先专注于信息技术知识的梳理。'
    })
  ]
});
