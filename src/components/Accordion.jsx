import React, { useState, useCallback, useRef, useImperativeHandle, forwardRef } from 'react';
import { AccordionProvider } from '../context/AccordionContext';

export const Accordion = forwardRef((props, ref) => {
  const {
    children,
    mode = 'single',
    defaultExpanded = [],
    expanded,
    onOpen,
    onClose,
    onToggle,
    onOpenAll,
    onCloseAll,
    onAnimationStart,
    onAnimationEnd,
    className = '',
    style = {},
    allowMultiple = false,
    collapsible = true,
    lazyRender = false,
    animationDuration = 200, // Changed from 300 to 200ms (faster)
    animationEasing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    disableAnimation = false,
    dir = 'ltr',
    as: Component = 'div',
    ...restProps
  } = props;

  const isControlled = expanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const expandedItems = isControlled ? expanded : internalExpanded;
  const animationFrameRef = useRef(null);

  const updateExpandedItems = useCallback(
    (newExpanded) => {
      if (!isControlled) {
        setInternalExpanded(newExpanded);
      }
    },
    [isControlled]
  );

  const handleOpen = useCallback(
    (id) => {
      let newExpanded;
      if (mode === 'single' && !allowMultiple) {
        newExpanded = [id];
      } else {
        if (!expandedItems.includes(id)) {
          newExpanded = [...expandedItems, id];
        } else if (collapsible && mode === 'single' && allowMultiple) {
          newExpanded = expandedItems.filter((itemId) => itemId !== id);
        } else {
          newExpanded = expandedItems;
        }
      }

      updateExpandedItems(newExpanded);
      if (onOpen) onOpen(id);
      if (onToggle) onToggle(id, true);
    },
    [mode, allowMultiple, collapsible, expandedItems, updateExpandedItems, onOpen, onToggle]
  );

  const handleClose = useCallback(
    (id) => {
      const newExpanded = expandedItems.filter((itemId) => itemId !== id);
      updateExpandedItems(newExpanded);
      if (onClose) onClose(id);
      if (onToggle) onToggle(id, false);
    },
    [expandedItems, updateExpandedItems, onClose, onToggle]
  );

  const handleToggle = useCallback(
    (id) => {
      if (expandedItems.includes(id)) {
        handleClose(id);
      } else {
        handleOpen(id);
      }
    },
    [expandedItems, handleClose, handleOpen]
  );

  const handleOpenAll = useCallback(() => {
    if (allowMultiple || mode === 'multiple') {
      const allItemIds = [];
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.props.id) {
          allItemIds.push(child.props.id);
        }
      });
      updateExpandedItems(allItemIds);
      if (onOpenAll) onOpenAll();
    }
  }, [allowMultiple, mode, children, updateExpandedItems, onOpenAll]);

  const handleCloseAll = useCallback(() => {
    updateExpandedItems([]);
    if (onCloseAll) onCloseAll();
  }, [updateExpandedItems, onCloseAll]);

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle,
    openAll: handleOpenAll,
    closeAll: handleCloseAll,
    getExpandedItems: () => expandedItems,
  }));

  const contextValue = {
    mode,
    expandedItems,
    allowMultiple,
    collapsible,
    lazyRender,
    animationDuration,
    animationEasing,
    disableAnimation,
    onOpen: handleOpen,
    onClose: handleClose,
    onToggle: handleToggle,
    onAnimationStart,
    onAnimationEnd,
    dir,
    registerItem: useCallback(() => {}, []),
    unregisterItem: useCallback(() => {}, []),
  };

  const combinedClassName =
    `react-pro-accordion react-pro-accordion--${mode} react-pro-accordion--${dir} ${className}`.trim();

  return (
    <AccordionProvider value={contextValue}>
      <Component
        className={combinedClassName}
        style={style}
        role="presentation"
        data-mode={mode}
        data-dir={dir}
        {...restProps}
      >
        {children}
      </Component>
    </AccordionProvider>
  );
});

Accordion.displayName = 'Accordion';
