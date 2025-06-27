import { useEffect } from 'react';
import { useLocation } from 'rspress/runtime';

export default function PerformanceOptimizer() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 页面加载性能优化
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // 延迟执行图片优化
    const timer = setTimeout(optimizeImages, 100);

    // 预加载关键资源
    const preloadCriticalResources = () => {
      const criticalLinks = [
        '/hgbanner-light.webp',
        '/hgbanner-dark.webp',
        '/HG.webp'
      ];

      criticalLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // 只在首次加载时预加载
    if (pathname === '/') {
      preloadCriticalResources();
    }

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // 页面切换时的性能优化
    const handleRouteChange = () => {
      // 清理不必要的事件监听器
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleRouteChange();
  }, [pathname]);

  return null;
}
