// src/hooks/use-breakpoint.ts
'use client';

import { useState, useEffect } from 'react';

export function useBreakpoint(breakpoint: number) {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Set initial value
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isBelowBreakpoint;
}
