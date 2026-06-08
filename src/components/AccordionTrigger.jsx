import React, { useCallback } from 'react';
import { useAccordionItemContext } from '../hooks/useAccordionItemContext';
import { useAccordionContext } from '../hooks/useAccordionContext';
import { handleKeyboardEvent } from '../utils/eventHandlers';

export const AccordionTrigger = React.memo((props) => {
  const {
    children,
    className = '',
    style = {},
    as: Component = 'button',
    iconPosition = 'right',
    ...restProps
  } = props;

  const { id, isExpanded, disabled, onToggle } = useAccordionItemContext();
  const { dir } = useAccordionContext();

  const handleKeyDown = useCallback(
    (event) => {
      const handled = handleKeyboardEvent(event, {
        onActivate: () => {
          event.preventDefault();
          onToggle();
        },
        isExpanded,
        dir,
      });

      if (!handled) {
        const syntheticEvent = new CustomEvent('accordion-keydown', {
          detail: { originalEvent: event, itemId: id },
        });
        event.currentTarget.dispatchEvent(syntheticEvent);
      }
    },
    [onToggle, isExpanded, dir, id]
  );

  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  const combinedClassName =
    `react-pro-accordion__trigger ${isExpanded ? 'react-pro-accordion__trigger--expanded' : ''} ${disabled ? 'react-pro-accordion__trigger--disabled' : ''} ${className}`.trim();

  return (
    <Component
      id={triggerId}
      className={combinedClassName}
      style={style}
      onClick={!disabled ? onToggle : undefined}
      onKeyDown={handleKeyDown}
      aria-expanded={isExpanded}
      aria-controls={panelId}
      aria-disabled={disabled}
      disabled={disabled}
      type="button"
      role="button"
      tabIndex={disabled ? -1 : 0}
      data-expanded={isExpanded}
      data-position={iconPosition}
      {...restProps}
    >
      {iconPosition === 'left' && children}
      {children}
      {iconPosition === 'right' && children}
    </Component>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';
