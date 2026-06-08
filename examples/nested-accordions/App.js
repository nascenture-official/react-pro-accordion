import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function NestedAccordionsExample() {
  return (
    <div style={{ maxWidth: '700px', margin: '50px auto', padding: '20px' }}>
      <h1>Nested Accordions Example</h1>
      <p>Accordions can be nested infinitely deep</p>

      <Accordion>
        <AccordionItem id="level1">
          <AccordionTrigger>📁 Level 1: Product Documentation</AccordionTrigger>
          <AccordionContent>
            <Accordion>
              <AccordionItem id="level2a">
                <AccordionTrigger>📂 Level 2: Getting Started</AccordionTrigger>
                <AccordionContent>
                  <Accordion>
                    <AccordionItem id="level3a">
                      <AccordionTrigger>📄 Level 3: Installation</AccordionTrigger>
                      <AccordionContent>
                        Run <code>npm install react-pro-accordion</code> to get started.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem id="level3b">
                      <AccordionTrigger>📄 Level 3: Basic Usage</AccordionTrigger>
                      <AccordionContent>
                        Import components and use them in your React app.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem id="level2b">
                <AccordionTrigger>📂 Level 2: API Reference</AccordionTrigger>
                <AccordionContent>
                  <Accordion>
                    <AccordionItem id="level3c">
                      <AccordionTrigger>📄 Level 3: Props</AccordionTrigger>
                      <AccordionContent>
                        Comprehensive list of all available props and their types.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem id="level3d">
                      <AccordionTrigger>📄 Level 3: Methods</AccordionTrigger>
                      <AccordionContent>
                        Imperative API methods for programmatic control.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="level1b">
          <AccordionTrigger>📁 Level 1: Advanced Examples</AccordionTrigger>
          <AccordionContent>
            <Accordion mode="multiple" allowMultiple={true}>
              <AccordionItem id="advanced1">
                <AccordionTrigger>🎨 Custom Styling</AccordionTrigger>
                <AccordionContent>
                  Learn how to customize colors, spacing, and themes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem id="advanced2">
                <AccordionTrigger>⚡ Performance</AccordionTrigger>
                <AccordionContent>Optimize your accordions for large datasets.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div
        style={{ marginTop: '20px', padding: '10px', background: '#f7fafc', borderRadius: '4px' }}
      >
        <strong>✨ Features shown:</strong>
        <ul style={{ marginTop: '5px', marginBottom: '0' }}>
          <li>Unlimited nesting depth</li>
          <li>Each nested accordion can have its own configuration</li>
          <li>Different modes (single/multiple) for different levels</li>
        </ul>
      </div>
    </div>
  );
}

export default NestedAccordionsExample;
