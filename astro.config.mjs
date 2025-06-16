import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hg-tech-kb.vercel.app',
  integrations: [
    starlight({
      title: '浙江省杭州高级中学 技术学科知识库',
    }),
  ],
});
