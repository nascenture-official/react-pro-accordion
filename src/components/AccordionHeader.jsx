import React from 'react';
import { useAccordionItemContext } from '../hooks/useAccordionItemContext';

export const AccordionHeader = React.memo((props) => {
  const {
    children,
    className = '',
    style = {},
    level = 3,
    as: Component = 'div',
    ...restProps
  } = props;

  const { id, disabled } = useAccordionItemContext();
  const HeadingTag = `h${level}`;

  const combinedClassName = `react-pro-accordion__header ${className}`.trim();

  return (
    <Component className={combinedClassName} style={style} {...restProps}>
      <HeadingTag className="react-pro-accordion__heading">{children}</HeadingTag>
    </Component>
  );
});

AccordionHeader.displayName = 'AccordionHeader';
