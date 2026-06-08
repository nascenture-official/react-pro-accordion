import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function LazyLoadingExample() {
  const [renderLogs, setRenderLogs] = useState([]);

  const HeavyComponent = ({ id, onLoad }) => {
    React.useEffect(() => {
      onLoad(id);
    }, []);

    // Simulate heavy content
    return (
      <div>
        <p>This is heavy content that was lazy loaded!</p>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={{ padding: '5px', margin: '5px 0', background: '#f0f0f0' }}>
            Item {i + 1}: This content only renders when expanded
          </div>
        ))}
      </div>
    );
  };

  const addLog = (message) => {
    setRenderLogs((prev) =>
      [`${new Date().toLocaleTimeString()}: ${message}`, ...prev].slice(0, 5)
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Lazy Loading Example</h1>
      <p>Content only renders when accordion is expanded</p>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <Accordion lazyRender={true}>
            <AccordionItem id="lazy1">
              <AccordionTrigger>📦 Lazy Loaded Item 1</AccordionTrigger>
              <AccordionContent>
                <HeavyComponent id="lazy1" onLoad={(id) => addLog(`Rendered ${id}`)} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="lazy2">
              <AccordionTrigger>📦 Lazy Loaded Item 2</AccordionTrigger>
              <AccordionContent>
                <HeavyComponent id="lazy2" onLoad={(id) => addLog(`Rendered ${id}`)} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="lazy3">
              <AccordionTrigger>📦 Lazy Loaded Item 3</AccordionTrigger>
              <AccordionContent>
                <HeavyComponent id="lazy3" onLoad={(id) => addLog(`Rendered ${id}`)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ padding: '15px', background: '#f7fafc', borderRadius: '5px' }}>
            <strong>Render Log:</strong>
            {renderLogs.length === 0 ? (
              <p style={{ marginTop: '10px', color: '#666' }}>
                Click on items to see lazy loading in action!
              </p>
            ) : (
              renderLogs.map((log, i) => (
                <div
                  key={i}
                  style={{ marginTop: '5px', fontSize: '12px', fontFamily: 'monospace' }}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: '10px', background: '#f0f9ff', borderRadius: '4px' }}>
        <strong>⚡ Performance Benefits:</strong>
        <ul style={{ marginTop: '5px', marginBottom: '0' }}>
          <li>Initial page load is much faster</li>
          <li>Less memory usage</li>
          <li>Ideal for accordions with many items or heavy content</li>
          <li>Perfect for FAQs, documentation, and data-heavy applications</li>
        </ul>
      </div>
    </div>
  );
}

export default LazyLoadingExample;
