import React, { useState } from 'react';

export function Slider({ value, onChange, min = 0, max = 100, step = 1, className = '', defaultValue, ...props }: {
  value?: number;
  onChange?: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  defaultValue?: number[];
}) {
  const [internalValue, setInternalValue] = useState(defaultValue ? defaultValue[0] : value || 0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setInternalValue(v);
    onChange && onChange(v);
  };
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value !== undefined ? value : internalValue}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
}
