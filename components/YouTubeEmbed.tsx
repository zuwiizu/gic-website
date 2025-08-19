'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  className?: string;
}

export function YouTubeEmbed({ 
  videoId, 
  title, 
  description, 
  thumbnail,
  className = "" 
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailSrc = thumbnail || defaultThumbnail;
  
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {!isLoaded ? (
        <div 
          className="relative cursor-pointer group"
          onClick={handleLoad}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleLoad();
            }
          }}
          aria-label={`Play video: ${title}`}
        >
          <div className="aspect-video relative">
            <img
              src={thumbnailSrc}
              alt={`Video thumbnail: ${title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          {(title || description) && (
            <div className="p-4">
              {title && (
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
          {(title || description) && (
            <div className="p-4">
              {title && (
                <h3 className="font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-gray-600">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface VideoGridProps {
  videos: Array<{
    id: string;
    title: string;
    description?: string;
    thumbnail?: string;
  }>;
  className?: string;
}

export function VideoGrid({ videos, className = "" }: VideoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {videos.map((video) => (
        <YouTubeEmbed
          key={video.id}
          videoId={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
        />
      ))}
    </div>
  );
}

interface FeaturedVideoProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  className?: string;
}

export function FeaturedVideo({ 
  videoId, 
  title, 
  description, 
  thumbnail,
  className = "" 
}: FeaturedVideoProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <YouTubeEmbed
        videoId={videoId}
        title={title}
        description={description}
        thumbnail={thumbnail}
        className="shadow-lg"
      />
    </div>
  );
}
