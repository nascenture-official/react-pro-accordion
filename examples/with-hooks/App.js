import React from 'react';
import {
  useAccordion,
  useAccordionControls,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

// Custom component using useAccordion hook
function CustomAccordionBuilder() {
  const { expandedItems, open, close, toggle, isExpanded } = useAccordion({
    defaultExpanded: [],
    allowMultiple: true,
  });

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => open('hook1')} style={buttonStyle}>
          Open Hook Item 1
        </button>
        <button onClick={() => close('hook1')} style={buttonStyle}>
          Close Hook Item 1
        </button>
        <button onClick={() => toggle('hook2')} style={buttonStyle}>
          Toggle Hook Item 2
        </button>
      </div>

      <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ borderBottom: '1px solid #e2e8f0' }}>
          <button
            onClick={() => toggle('hook1')}
            style={{
              width: '100%',
              padding: '15px',
              textAlign: 'left',
              background: isExpanded('hook1') ? '#ebf8ff' : 'white',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {isExpanded('hook1') ? '▼' : '▶'} Custom Hook Item 1
          </button>
          {isExpanded('hook1') && (
            <div style={{ padding: '15px', background: '#f7fafc' }}>
              This accordion is built using the useAccordion hook!
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                Expanded items: {expandedItems.join(', ') || 'none'}
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggle('hook2')}
            style={{
              width: '100%',
              padding: '15px',
              textAlign: 'left',
              background: isExpanded('hook2') ? '#ebf8ff' : 'white',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {isExpanded('hook2') ? '▼' : '▶'} Custom Hook Item 2
          </button>
          {isExpanded('hook2') && (
            <div style={{ padding: '15px', background: '#f7fafc' }}>
              The useAccordion hook gives you complete control over the UI while managing all the
              logic.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Component using useAccordionControls hook
function AccordionControlsDemo() {
  const controls = useAccordionControls();

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => controls.openItem('control1')} style={buttonStyle}>
          Open Control Item
        </button>
        <button onClick={() => controls.closeItem('control1')} style={buttonStyle}>
          Close Control Item
        </button>
        <button onClick={() => controls.toggleItem('control1')} style={buttonStyle}>
          Toggle Control Item
        </button>
        <button onClick={() => controls.openAll()} style={buttonStyle}>
          Open All in Accordion
        </button>
        <button onClick={() => controls.closeAll()} style={buttonStyle}>
          Close All in Accordion
        </button>
      </div>

      <Accordion>
        <AccordionItem id="control1">
          <AccordionTrigger>Item Controlled by useAccordionControls</AccordionTrigger>
          <AccordionContent>
            This item can be controlled using the controls from the hook!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const buttonStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  background: '#4299e1',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

function HooksExample() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Custom Hooks Examples</h1>
      <p>Build your own accordion components using our hooks</p>

      <h2>1. useAccordion Hook</h2>
      <p>Complete control over UI with all logic provided</p>
      <CustomAccordionBuilder />

      <h2 style={{ marginTop: '30px' }}>2. useAccordionControls Hook</h2>
      <p>Access control methods from any component</p>
      <AccordionControlsDemo />

      <h2 style={{ marginTop: '30px' }}>Available Hooks</h2>
      <div style={{ padding: '15px', background: '#f7fafc', borderRadius: '5px' }}>
        <h3>📚 Hook Documentation:</h3>
        <ul>
          <li>
            <strong>useAccordion(options)</strong> - Create fully custom accordion logic
          </li>
          <li>
            <strong>useAccordionItem(id, options)</strong> - Hook for individual items
          </li>
          <li>
            <strong>useAccordionContext()</strong> - Access accordion context
          </li>
          <li>
            <strong>useAccordionControls()</strong> - Get control methods for the nearest accordion
          </li>
          <li>
            <strong>useAnimation(options)</strong> - Custom animation hook for advanced use cases
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HooksExample;
