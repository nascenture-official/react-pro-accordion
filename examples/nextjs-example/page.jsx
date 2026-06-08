'use client';

import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

export default function NextJsExample() {
  const [activeTab, setActiveTab] = useState('install');

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1>Next.js + React Pro Accordion</h1>
      <p>Works seamlessly with SSR and client components</p>

      <Accordion defaultExpanded={['install']}>
        <AccordionItem id="install">
          <AccordionTrigger>📦 Installation</AccordionTrigger>
          <AccordionContent>
            <pre
              style={{
                background: '#f0f0f0',
                padding: '15px',
                borderRadius: '5px',
                overflow: 'auto',
              }}
            >
              {`npm install react-pro-accordion
# or
yarn add react-pro-accordion`}
            </pre>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="setup">
          <AccordionTrigger>⚙️ Setup in Next.js</AccordionTrigger>
          <AccordionContent>
            <pre
              style={{
                background: '#f0f0f0',
                padding: '15px',
                borderRadius: '5px',
                overflow: 'auto',
              }}
            >
              {`// app/components/AccordionDemo.jsx
'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 
from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

export default function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem id="item1">
        <AccordionTrigger>Title</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
            </pre>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="ssr">
          <AccordionTrigger>🖥️ SSR Considerations</AccordionTrigger>
          <AccordionContent>
            <p>React Pro Accordion is fully SSR-compatible. Just make sure to:</p>
            <ul>
              <li>Use the 'use client' directive in Next.js 13+ App Router</li>
              <li>Import styles in your component or layout</li>
              <li>Works with both Pages Router and App Router</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div
        style={{ marginTop: '30px', padding: '15px', background: '#f0f9ff', borderRadius: '8px' }}
      >
        <strong>✅ Next.js Features Supported:</strong>
        <ul style={{ marginTop: '10px', marginBottom: '0' }}>
          <li>Server-Side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>App Router (with 'use client')</li>
          <li>Pages Router</li>
          <li>Incremental Static Regeneration (ISR)</li>
          <li>No hydration mismatches</li>
        </ul>
      </div>
    </div>
  );
}
