'use client';

import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const CustomImage = ({ src, alt, className = '', priority = false }: CustomImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default CustomImage;