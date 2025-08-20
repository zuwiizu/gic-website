/**
 * Cloudflare Image Resizing loader for Next.js
 * Optimizes images using Cloudflare's /cdn-cgi/image/ service
 */

interface CloudflareImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function cloudflareImageLoader({
  src,
  width,
  quality = 75,
}: CloudflareImageLoaderProps): string {
  // If it's already a Cloudflare image URL, return as-is
  if (src.includes('/cdn-cgi/image/')) {
    return src;
  }

  // If it's a relative path, make it absolute
  const absoluteSrc = src.startsWith('/') ? src : `/${src}`;

  // For static exports or development, serve images directly without transformation
  if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true') {
    return absoluteSrc;
  }

  // Build Cloudflare image transformation URL for production
  const params = new URLSearchParams({
    format: 'auto',
    width: width.toString(),
    quality: quality.toString(),
    fit: 'scale-down',
  });

  return `/cdn-cgi/image/${params.toString()}${absoluteSrc}`;
}
