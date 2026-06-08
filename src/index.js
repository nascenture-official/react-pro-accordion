// Import React for the library
import React from 'react';

// Import components
import { Accordion } from './components/Accordion.jsx';
import { AccordionItem } from './components/AccordionItem.jsx';
import { AccordionHeader } from './components/AccordionHeader.jsx';
import { AccordionTrigger } from './components/AccordionTrigger.jsx';
import { AccordionContent } from './components/AccordionContent.jsx';
import { AccordionIcon } from './components/AccordionIcon.jsx';

// Import hooks
import { useAccordion } from './hooks/useAccordion.js';
import { useAccordionItem } from './hooks/useAccordionItem.js';
import { useAccordionContext } from './hooks/useAccordionContext.js';
import { useAccordionControls } from './hooks/useAccordionControls.js';
import { useAnimation } from './hooks/useAnimation.js';
import { useAccordionItemContext } from './hooks/useAccordionItemContext.js';

// Import context providers
import { AccordionProvider, AccordionItemProvider } from './context/index.js';

// Import styles
import './styles/accordion.css';
import './styles/themes.css';

// Named exports
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionIcon,
  useAccordion,
  useAccordionItem,
  useAccordionContext,
  useAccordionControls,
  useAccordionItemContext,
  useAnimation,
  AccordionProvider,
  AccordionItemProvider,
};

// Default export
const ReactProAccordion = {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionIcon,
  useAccordion,
  useAccordionItem,
  useAccordionContext,
  useAccordionControls,
  useAccordionItemContext,
  useAnimation,
  AccordionProvider,
  AccordionItemProvider,
};

export default ReactProAccordion;
