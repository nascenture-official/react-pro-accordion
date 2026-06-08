import { useState, useCallback, useRef } from 'react';

export function useAccordion(options = {}) {
  const {
    mode = 'single',
    defaultExpanded = [],
    allowMultiple = false,
    collapsible = true,
    onOpen,
    onClose,
    onToggle,
  } = options;

  const [expandedItems, setExpandedItems] = useState(defaultExpanded);
  const callbacksRef = useRef({ onOpen, onClose, onToggle });

  callbacksRef.current = { onOpen, onClose, onToggle };

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

      setExpandedItems(newExpanded);
      callbacksRef.current.onOpen?.(id);
      callbacksRef.current.onToggle?.(id, true);
    },
    [mode, allowMultiple, collapsible, expandedItems]
  );

  const handleClose = useCallback(
    (id) => {
      const newExpanded = expandedItems.filter((itemId) => itemId !== id);
      setExpandedItems(newExpanded);
      callbacksRef.current.onClose?.(id);
      callbacksRef.current.onToggle?.(id, false);
    },
    [expandedItems]
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
      setExpandedItems([]);
    }
  }, [allowMultiple, mode]);

  const handleCloseAll = useCallback(() => {
    setExpandedItems([]);
  }, []);

  return {
    expandedItems,
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle,
    openAll: handleOpenAll,
    closeAll: handleCloseAll,
    isExpanded: useCallback((id) => expandedItems.includes(id), [expandedItems]),
  };
}
