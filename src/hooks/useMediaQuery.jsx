import { useState, useEffect } from 'react';

const sizes = {
  sm: '(max-width: 768px)',
  md: '(min-width: 768px) and (max-width: 1024px)',
  lg: '(min-width: 1024px) and (max-width: 1280px)',
  xl: '(min-width: 1280px)',
  '2xl': '1536px',
};

const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `${sizes[screen]}`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};

export default useMediaQuery;
