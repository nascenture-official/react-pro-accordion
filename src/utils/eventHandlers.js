export function handleKeyboardEvent(event, handlers) {
  const { key } = event;
  const { onActivate, onArrowUp, onArrowDown, onHome, onEnd, isExpanded, dir } = handlers;

  switch (key) {
    case 'Enter':
    case ' ':
    case 'Space':
      event.preventDefault();
      onActivate?.();
      return true;

    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      return true;

    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      return true;

    case 'Home':
      event.preventDefault();
      onHome?.();
      return true;

    case 'End':
      event.preventDefault();
      onEnd?.();
      return true;

    default:
      return false;
  }
}

export function findNextAccordionTrigger(triggers, currentIndex, direction) {
  if (direction === 'next') {
    return triggers[currentIndex + 1] || triggers[0];
  } else if (direction === 'prev') {
    return triggers[currentIndex - 1] || triggers[triggers.length - 1];
  }
  return null;
}

export function focusAccordionTrigger(trigger) {
  if (trigger) {
    trigger.focus();
  }
}

export function getAccordionTriggers(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll('[role="button"]'));
}
