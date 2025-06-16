import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '浙江省杭州高级中学 技术学科知识库',
      sidebar: [
        { label: '信息技术', link: '/information-technology/basic-knowledge/information-systems-support-security' },
        { label: '通用技术', link: '/general-technology/' },
        { label: '首页', link: '/' }
      ],
      logo: {
        src: './src/assets/hgbanner-light.webp',
        dark: './src/assets/hgbanner-dark.webp',
        alt: '杭高 Logo'
      }
    })
  ],
});
