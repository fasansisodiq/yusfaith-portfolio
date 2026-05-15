import { useState, useEffect } from 'react';

export function usePreloadImage(src) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    let isMounted = true;
    const img = new Image();
    
    img.src = src;
    
    img.onload = () => {
      if (isMounted) setIsLoaded(true);
    };
    
    img.onerror = () => {
      if (isMounted) setIsLoaded(false);
    };

    // Cleanup to prevent memory leaks and state updates on unmounted components
    return () => {
      isMounted = false;
    };
  }, [src]);

  return isLoaded;
}
