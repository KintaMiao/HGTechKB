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
          label: '指南',
          autogenerate: { directory: 'guide' },
        },
        {
          label: '信息技术',
          autogenerate: { directory: 'information-technology' },
        },
        {
          label: '通用技术',
          autogenerate: { directory: 'general-technology' },
        },
      ],
    }),
  ],
});
