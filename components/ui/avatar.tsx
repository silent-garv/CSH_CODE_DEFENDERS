import React from 'react';

export function Avatar({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex items-center justify-center w-full h-full bg-gray-300 text-gray-700 ${className}`}>{children}</div>;
}
