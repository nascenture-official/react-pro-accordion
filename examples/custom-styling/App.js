import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function CustomStylingExample() {
  // Custom CSS variables for theming
  const customTheme = {
    '--accordion-border-color': '#c53030',
    '--accordion-bg-color': '#fff5f5',
    '--accordion-item-border-color': '#fed7d7',
    '--accordion-trigger-color': '#c53030',
    '--accordion-trigger-hover-bg': '#fed7d7',
    '--accordion-trigger-expanded-color': '#9b2c2c',
    '--accordion-trigger-expanded-bg': '#fed7d7',
    '--accordion-border-radius': '12px',
    '--accordion-trigger-padding': '16px',
    '--accordion-content-padding': '20px',
    '--accordion-focus-ring-color': '#fc8181',
  };

  const customStyles = `
    .gradient-accordion .react-pro-accordion__trigger {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .gradient-accordion .react-pro-accordion__trigger:hover {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    .gradient-accordion .react-pro-accordion__trigger--expanded {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    .shadow-accordion {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
  `;

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <style>{customStyles}</style>

      <h1>Custom Styling Examples</h1>

      <h2>1. CSS Variables Theme</h2>
      <div style={customTheme}>
        <Accordion>
          <AccordionItem id="custom1">
            <AccordionTrigger>Custom Red Theme</AccordionTrigger>
            <AccordionContent>
              This accordion uses CSS variables for custom colors, spacing, and borders. You can
              easily match your brand colors!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="custom2">
            <AccordionTrigger>Fully Customizable</AccordionTrigger>
            <AccordionContent>
              Override any CSS variable to create your own unique theme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <h2 style={{ marginTop: '30px' }}>2. Gradient Theme</h2>
      <Accordion className="gradient-accordion shadow-accordion">
        <AccordionItem id="gradient1">
          <AccordionTrigger>🎨 Gradient Background</AccordionTrigger>
          <AccordionContent>
            You can apply any CSS to customize the appearance completely. Here we're using a
            beautiful gradient background.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="gradient2">
          <AccordionTrigger>✨ Custom Shadows</AccordionTrigger>
          <AccordionContent>
            Add shadows, rounded corners, animations, or any other CSS properties.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 style={{ marginTop: '30px' }}>3. Inline Styles</h2>
      <Accordion style={{ border: '2px solid #4299e1', borderRadius: '8px' }}>
        <AccordionItem id="inline1">
          <AccordionTrigger style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Inline Styling
          </AccordionTrigger>
          <AccordionContent style={{ background: '#f7fafc' }}>
            You can also use inline styles for quick customizations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CustomStylingExample;
