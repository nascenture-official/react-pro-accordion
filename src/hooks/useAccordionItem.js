import { useCallback } from 'react';
import { useAccordionContext } from './useAccordionContext';

export function useAccordionItem(id, options = {}) {
  const { defaultExpanded = false, disabled = false } = options;
  const context = useAccordionContext();

  const isExpanded = context.expandedItems.includes(id);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      context.onToggle(id);
    }
  }, [disabled, context, id]);

  const handleOpen = useCallback(() => {
    if (!disabled && !isExpanded) {
      context.onOpen(id);
    }
  }, [disabled, isExpanded, context, id]);

  const handleClose = useCallback(() => {
    if (!disabled && isExpanded) {
      context.onClose(id);
    }
  }, [disabled, isExpanded, context, id]);

  return {
    isExpanded,
    disabled,
    toggle: handleToggle,
    open: handleOpen,
    close: handleClose,
  };
}
