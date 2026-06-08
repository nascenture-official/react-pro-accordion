import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAccordionContext } from '../hooks/useAccordionContext.js';
import { AccordionItemProvider } from '../context/AccordionItemContext.js';

export const AccordionItem = React.memo((props) => {
  const {
    id,
    children,
    className = '',
    style = {},
    as: Component = 'div',
    defaultExpanded = false,
    disabled = false,
    ...restProps
  } = props;

  const context = useAccordionContext();
  const [isLazyLoaded, setIsLazyLoaded] = useState(!context.lazyRender);

  const isExpanded = context.expandedItems.includes(id);

  useEffect(() => {
    if (context.lazyRender && isExpanded && !isLazyLoaded) {
      setIsLazyLoaded(true);
    }
  }, [context.lazyRender, isExpanded, isLazyLoaded]);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      context.onToggle(id);
    }
  }, [disabled, context, id]);

  const contextValue = useMemo(
    () => ({
      id,
      isExpanded,
      disabled,
      onToggle: handleToggle,
      isLazyLoaded: isLazyLoaded || !context.lazyRender,
    }),
    [id, isExpanded, disabled, handleToggle, isLazyLoaded, context.lazyRender]
  );

  const combinedClassName =
    `react-pro-accordion__item ${isExpanded ? 'react-pro-accordion__item--expanded' : ''} ${disabled ? 'react-pro-accordion__item--disabled' : ''} ${className}`.trim();

  return React.createElement(
    AccordionItemProvider,
    { value: contextValue },
    React.createElement(
      Component,
      {
        className: combinedClassName,
        style: style,
        'data-id': id,
        'data-expanded': isExpanded,
        'data-disabled': disabled,
        role: 'presentation',
        ...restProps,
      },
      children
    )
  );
});

AccordionItem.displayName = 'AccordionItem';
