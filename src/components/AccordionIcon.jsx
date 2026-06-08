import React from 'react';
import { useAccordionItemContext } from '../hooks/useAccordionItemContext';

export const AccordionIcon = React.memo((props) => {
  const {
    className = '',
    style = {},
    expandedIcon,
    collapsedIcon,
    as: Component = 'span',
    ...restProps
  } = props;

  const { isExpanded } = useAccordionItemContext();

  const defaultExpandedIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15 10H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const defaultCollapsedIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const icon = isExpanded
    ? expandedIcon || defaultExpandedIcon
    : collapsedIcon || defaultCollapsedIcon;

  const combinedClassName =
    `react-pro-accordion__icon react-pro-accordion__icon--${isExpanded ? 'expanded' : 'collapsed'} ${className}`.trim();

  return (
    <Component className={combinedClassName} style={style} aria-hidden="true" {...restProps}>
      {icon}
    </Component>
  );
});

AccordionIcon.displayName = 'AccordionIcon';
