// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '浙江省杭州高级中学 技术学科知识库',
      sidebar: [
        {
          label: '文档',
          autogenerate: { directory: '.' },
        },
      ],
    }),
  ],
});
