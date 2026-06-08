import { useCallback } from 'react';
import { useAccordionContext } from './useAccordionContext';

export function useAccordionControls() {
  const context = useAccordionContext();

  const openItem = useCallback(
    (id) => {
      context.onOpen(id);
    },
    [context]
  );

  const closeItem = useCallback(
    (id) => {
      context.onClose(id);
    },
    [context]
  );

  const toggleItem = useCallback(
    (id) => {
      context.onToggle(id);
    },
    [context]
  );

  const openAll = useCallback(() => {
    if (context.allowMultiple || context.mode === 'multiple') {
      context.onOpenAll?.();
    }
  }, [context]);

  const closeAll = useCallback(() => {
    context.onCloseAll?.();
  }, [context]);

  const isExpanded = useCallback(
    (id) => {
      return context.expandedItems.includes(id);
    },
    [context.expandedItems]
  );

  return {
    openItem,
    closeItem,
    toggleItem,
    openAll,
    closeAll,
    isExpanded,
    expandedItems: context.expandedItems,
  };
}
