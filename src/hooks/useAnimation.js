import { useRef, useCallback, useState } from 'react';

export function useAnimation(options = {}) {
  const {
    duration = 300,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    disabled = false,
    onStart,
    onEnd,
  } = options;

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState('idle');
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  const animate = useCallback(
    (from, to, onUpdate) => {
      if (disabled) {
        onUpdate(to);
        onEnd?.();
        return;
      }

      if (animationRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      const startTime = performance.now();
      startTimeRef.current = startTime;
      setIsAnimating(true);
      setAnimationState('running');
      onStart?.();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);

        let easedProgress;
        if (easing === 'linear') {
          easedProgress = progress;
        } else if (easing.includes('cubic-bezier')) {
          easedProgress = progress;
        } else {
          easedProgress = 1 - Math.pow(1 - progress, 2);
        }

        const currentValues = {};
        for (const key in from) {
          const fromValue = from[key];
          const toValue = to[key];
          currentValues[key] = fromValue + (toValue - fromValue) * easedProgress;
        }

        onUpdate(currentValues);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          onUpdate(to);
          setIsAnimating(false);
          setAnimationState('completed');
          onEnd?.();
          animationRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(step);
      animationRef.current = { cancel: () => cancelAnimationFrame(frameRef.current) };
    },
    [duration, easing, disabled, onStart, onEnd]
  );

  const startAnimation = useCallback(
    (config) => {
      const { from, to, onUpdate } = config;
      animate(from, to, onUpdate);
    },
    [animate]
  );

  const stopAnimation = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      setIsAnimating(false);
      setAnimationState('stopped');
    }
  }, []);

  return {
    startAnimation,
    stopAnimation,
    isAnimating,
    animationState,
  };
}
