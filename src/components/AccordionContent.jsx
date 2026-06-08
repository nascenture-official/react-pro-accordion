import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useAccordionItemContext } from '../hooks/useAccordionItemContext';
import { useAccordionContext } from '../hooks/useAccordionContext';

export const AccordionContent = React.memo((props) => {
  const { children, className = '', style = {}, as: Component = 'div', ...restProps } = props;

  const { id, isExpanded, isLazyLoaded } = useAccordionItemContext();
  const context = useAccordionContext();
  const contentRef = useRef(null);
  const innerContentRef = useRef(null);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
  const animationFrameRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isExpanded && !hasBeenExpanded) {
      setHasBeenExpanded(true);
    }
  }, [isExpanded, hasBeenExpanded]);

  // Ultra-fast animation with micro-optimizations
  useEffect(() => {
    if (!contentRef.current || context.disableAnimation) {
      if (contentRef.current && context.disableAnimation) {
        contentRef.current.style.display = isExpanded ? 'block' : 'none';
      }
      return;
    }

    const element = contentRef.current;
    const innerElement = innerContentRef.current;

    if (!innerElement) return;

    // Cancel any ongoing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Get heights instantly
    const targetHeight = isExpanded ? innerElement.offsetHeight : 0;

    // For instant open/close without animation
    if (context.animationDuration === 0) {
      element.style.height = isExpanded ? 'auto' : '0px';
      element.style.opacity = isExpanded ? '1' : '0';
      element.style.display = isExpanded ? 'block' : 'none';
      return;
    }

    const startHeight = element.offsetHeight;

    // If already at target height, skip animation
    if (Math.abs(startHeight - targetHeight) < 1) {
      element.style.height = isExpanded ? 'auto' : '0px';
      return;
    }

    const startTime = performance.now();
    const duration = Math.min(context.animationDuration, 200); // Cap at 200ms max for speed
    const startOpacity = isExpanded ? 0 : 1;
    const targetOpacity = isExpanded ? 1 : 0;

    setIsAnimating(true);
    context.onAnimationStart?.(id);

    // Ultra-optimized animation loop
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Use cubic bezier for smooth but fast animation
      const easeProgress = 1 - Math.pow(1 - progress, 2);

      // Calculate current values
      const currentHeight = startHeight + (targetHeight - startHeight) * easeProgress;
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * easeProgress;

      // Apply styles directly without batch updates
      element.style.height = `${currentHeight}px`;
      element.style.opacity = currentOpacity;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - cleanup
        element.style.height = isExpanded ? 'auto' : '0px';
        element.style.opacity = isExpanded ? '1' : '0';
        element.style.overflow = isExpanded ? 'visible' : 'hidden';
        setIsAnimating(false);
        context.onAnimationEnd?.(id);
        animationFrameRef.current = null;
      }
    };

    // Set initial styles for animation
    element.style.overflow = 'hidden';
    element.style.willChange = 'height, opacity';
    element.style.display = 'block';
    element.style.height = `${startHeight}px`;
    element.style.opacity = startOpacity;

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isExpanded,
    context.disableAnimation,
    context.animationDuration,
    context.onAnimationStart,
    context.onAnimationEnd,
    id,
  ]);

  const shouldRender = !context.lazyRender || isExpanded || hasBeenExpanded;
  const panelId = `accordion-panel-${id}`;
  const triggerId = `accordion-trigger-${id}`;

  const combinedClassName =
    `react-pro-accordion__content ${isExpanded ? 'react-pro-accordion__content--expanded' : ''} ${isAnimating ? 'react-pro-accordion__content--animating' : ''} ${className}`.trim();

  const contentStyles = {
    ...style,
    overflow: 'hidden',
  };

  return (
    <Component
      ref={contentRef}
      id={panelId}
      className={combinedClassName}
      style={contentStyles}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isExpanded && !isAnimating}
      data-expanded={isExpanded}
      data-animating={isAnimating}
      {...restProps}
    >
      <div ref={innerContentRef}>{shouldRender && children}</div>
    </Component>
  );
});

AccordionContent.displayName = 'AccordionContent';
