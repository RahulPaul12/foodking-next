import { useEffect, useRef, useState } from 'react';

export default function useAutoplay({ tabSource, getScrollElements = () => ({ btnElement: null, navElement: null }) }) {
  const [featureTabs] = useState(tabSource);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [featureActive, setFeatureActive] = useState(tabSource[0]?.id || null);
  const featureInterval = useRef(null);

  const speed = 2000;
  const delay = 3000;

  // Scroll to selected tab
  const handleFeatureScroll = () => {
    const { btnElement, navElement } = getScrollElements();
    if (btnElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const btnRect = btnElement.getBoundingClientRect();
      if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
        const offset = btnRect.left - navRect.left;
        navElement.scrollLeft += offset;
      }
    }
  };

  // Loop to auto switch tabs
  const handleFeatureLoop = () => {
    if (featureInterval.current) clearInterval(featureInterval.current);

    featureInterval.current = setInterval(() => {
      setFeatureIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % featureTabs.length;
        setFeatureActive(featureTabs[nextIndex].id);
        setTimeout(() => handleFeatureScroll(), 0); 
        return nextIndex;
      });
    }, speed);
  };

  // Manual tab switch
  const handleFeatureShow = (featureId, event) => {
    if (featureInterval.current) clearInterval(featureInterval.current);
    const index = featureTabs.findIndex((f) => f.id === featureId);
    if (index !== -1) {
      setFeatureActive(featureId);
      setFeatureIndex(index);
      handleFeatureScroll();
    }

    setTimeout(() => {
      handleFeatureLoop();
    }, delay);
  };

  // Start autoplay on mount
  useEffect(() => {
    setFeatureActive(tabSource[0]?.id || null);
    handleFeatureLoop();

    return () => {
      if (featureInterval.current) clearInterval(featureInterval.current);
    };
  }, []);

  return {
    featureTabs,
    featureActive,
    featureIndex,
    handleFeatureShow,
    handleFeatureLoop,
  };
}
