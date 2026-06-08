import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function MultipleModeExample() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Multiple Mode Accordion</h1>
      <p>Open multiple items simultaneously</p>

      <Accordion mode="multiple" allowMultiple={true}>
        <AccordionItem id="feature1">
          <AccordionTrigger>🌟 Feature 1: Accessibility</AccordionTrigger>
          <AccordionContent>
            Full ARIA support, keyboard navigation, screen reader compatibility.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="feature2">
          <AccordionTrigger>⚡ Feature 2: Performance</AccordionTrigger>
          <AccordionContent>
            Optimized with React.memo, lazy loading, and minimal re-renders.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="feature3">
          <AccordionTrigger>🎨 Feature 3: Customization</AccordionTrigger>
          <AccordionContent>
            CSS variables, custom themes, custom icons, and flexible styling.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
        💡 Tip: Try opening multiple items at once!
      </p>
    </div>
  );
}

export default MultipleModeExample;
