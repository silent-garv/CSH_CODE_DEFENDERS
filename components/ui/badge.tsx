import React from 'react';

export function Badge({ children, className = '', variant }: { children: React.ReactNode; className?: string; variant?: string }) {
  // You can style based on variant if needed
  return <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${className}`}>{children}</span>;
}
