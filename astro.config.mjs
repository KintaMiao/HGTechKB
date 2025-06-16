// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '浙江省杭州高级中学 技术学科知识库',
    }),
  ],
});
