import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null
  const height = hasWindow ? window.innerHeight : null

  

  return {
    width,
    height,
  }
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isComputer, setIsComputer] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {width} = windowDimensions;

  useEffect(() => { 
    if(width) {
      if(width > 1024) setIsComputer(true);
      else setIsComputer(false);
      if(width > 425 && width < 1024) setIsTablet(true);
      else setIsTablet(false);
      if(width > 320 && width < 425) setIsMobile(true);
      else setIsMobile(false);
    }
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowDimensions,
    isComputer,
    isTablet,
    isMobile
  };
}