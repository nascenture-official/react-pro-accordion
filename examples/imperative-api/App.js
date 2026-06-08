import React, { useRef, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function ImperativeApiExample() {
  const accordionRef = useRef(null);
  const [message, setMessage] = useState('');

  const handleAction = (action, id = null) => {
    switch (action) {
      case 'openAll':
        accordionRef.current?.openAll();
        setMessage('Opened all items');
        break;
      case 'closeAll':
        accordionRef.current?.closeAll();
        setMessage('Closed all items');
        break;
      case 'open':
        accordionRef.current?.open(id);
        setMessage(`Opened ${id}`);
        break;
      case 'close':
        accordionRef.current?.close(id);
        setMessage(`Closed ${id}`);
        break;
      case 'toggle':
        accordionRef.current?.toggle(id);
        setMessage(`Toggled ${id}`);
        break;
      case 'getStatus':
        const expanded = accordionRef.current?.getExpandedItems();
        setMessage(`Expanded items: ${expanded.join(', ') || 'none'}`);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Imperative API Example</h1>
      <p>Programmatic control using ref methods</p>

      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          background: '#f0f9ff',
          borderRadius: '8px',
        }}
      >
        <strong>Control Buttons:</strong>
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => handleAction('openAll')}>Open All</button>
          <button onClick={() => handleAction('closeAll')}>Close All</button>
          <button onClick={() => handleAction('open', 'api1')}>Open Item 1</button>
          <button onClick={() => handleAction('close', 'api1')}>Close Item 1</button>
          <button onClick={() => handleAction('toggle', 'api2')}>Toggle Item 2</button>
          <button onClick={() => handleAction('getStatus')}>Get Status</button>
        </div>
        {message && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px',
              background: '#e6f7e6',
              borderRadius: '4px',
            }}
          >
            ✅ {message}
          </div>
        )}
      </div>

      <Accordion ref={accordionRef}>
        <AccordionItem id="api1">
          <AccordionTrigger>Programmatic Item 1</AccordionTrigger>
          <AccordionContent>
            This item can be controlled using ref methods like open(), close(), and toggle().
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="api2">
          <AccordionTrigger>Programmatic Item 2</AccordionTrigger>
          <AccordionContent>
            Try clicking the buttons above to control this accordion programmatically!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="api3">
          <AccordionTrigger>Programmatic Item 3</AccordionTrigger>
          <AccordionContent>
            Available methods: open(), close(), toggle(), openAll(), closeAll(), getExpandedItems()
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ImperativeApiExample;
