import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function BasicExample() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Basic Accordion Example</h1>
      <p>Simple accordion with single item open at a time</p>

      <Accordion>
        <AccordionItem id="item1">
          <AccordionTrigger>What is React Pro Accordion?</AccordionTrigger>
          <AccordionContent>
            React Pro Accordion is a powerful, accessible, and highly customizable accordion library
            for React applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item2">
          <AccordionTrigger>How do I install it?</AccordionTrigger>
          <AccordionContent>
            You can install it using npm: <code>npm install react-pro-accordion</code>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item3">
          <AccordionTrigger>Is it free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! React Pro Accordion is MIT licensed and completely free to use in personal and
            commercial projects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default BasicExample;
