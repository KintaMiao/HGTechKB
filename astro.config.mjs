import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    starlight({
      title: '杭高技术学科知识库',
    }),
  ],
});
