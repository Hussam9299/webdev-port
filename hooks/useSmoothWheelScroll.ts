import { useEffect } from 'react';

interface SmoothWheelOptions {
  speed?: number;
  smoothness?: number;
}

const useSmoothWheelScroll = (options?: SmoothWheelOptions): void => {
  const { speed = 1, smoothness = 0.9 } = options || {};

  useEffect(() => {
    let scrollAmount = 0;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      
      // Scroll amount add karein
      scrollAmount += e.deltaY * speed;
      
      // Agar already scroll nahi ho raha hai, toh start karein
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const smoothScroll = (): void => {
      if (Math.abs(scrollAmount) > 0.5) {
        window.scrollBy({
          top: scrollAmount,
          left: 0,
          behavior: 'auto' // 'auto' use karein taaki smooth animation ho
        });
        
        // Momentum effect ke liye
        scrollAmount *= smoothness;
        
        // Next animation frame
        requestAnimationFrame(smoothScroll);
      } else {
        // Scroll complete
        isScrolling = false;
        scrollAmount = 0;
      }
    };

    // Event listener add karein
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup function
    return (): void => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [speed, smoothness]);
};

export default useSmoothWheelScroll;