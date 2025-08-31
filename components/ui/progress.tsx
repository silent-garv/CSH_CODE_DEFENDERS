import React from 'react';

export function Progress({ value, className = '', children, ...props }: { value: number; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`} {...props}>
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      />
      {children}
    </div>
  );
}
