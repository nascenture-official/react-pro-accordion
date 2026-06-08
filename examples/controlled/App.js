import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function ControlledExample() {
  const [expandedItems, setExpandedItems] = useState(['section1']);

  const handleToggle = (id, isOpen) => {
    if (isOpen) {
      setExpandedItems([...expandedItems, id]);
    } else {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Controlled Accordion Example</h1>
      <p>External control over which items are expanded</p>

      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          background: '#f0f9ff',
          borderRadius: '8px',
        }}
      >
        <strong>Control Panel:</strong>
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setExpandedItems(['section1'])}
            style={{ padding: '5px 10px', cursor: 'pointer' }}
          >
            Open Section 1
          </button>
          <button
            onClick={() => setExpandedItems(['section2'])}
            style={{ padding: '5px 10px', cursor: 'pointer' }}
          >
            Open Section 2
          </button>
          <button
            onClick={() => setExpandedItems(['section1', 'section2', 'section3'])}
            style={{ padding: '5px 10px', cursor: 'pointer' }}
          >
            Open All
          </button>
          <button
            onClick={() => setExpandedItems([])}
            style={{ padding: '5px 10px', cursor: 'pointer' }}
          >
            Close All
          </button>
        </div>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Currently expanded: {expandedItems.join(', ') || 'none'}
        </div>
      </div>

      <Accordion
        expanded={expandedItems}
        onToggle={handleToggle}
        mode="multiple"
        allowMultiple={true}
      >
        <AccordionItem id="section1">
          <AccordionTrigger>Section 1: Introduction</AccordionTrigger>
          <AccordionContent>
            This section is controlled by React state. Perfect for integrating with URL parameters
            or Redux.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="section2">
          <AccordionTrigger>Section 2: Features</AccordionTrigger>
          <AccordionContent>
            You can control the accordion state from anywhere in your application.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="section3">
          <AccordionTrigger>Section 3: Usage</AccordionTrigger>
          <AccordionContent>
            Great for forms, wizards, or any scenario where you need programmatic control.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ControlledExample;
