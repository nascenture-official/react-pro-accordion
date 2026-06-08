import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function ThemesExample() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = {
    light: { name: 'Light Theme', class: '' },
    dark: { name: 'Dark Theme', class: 'react-pro-accordion--dark' },
    compact: { name: 'Compact Theme', class: 'react-pro-accordion--compact' },
    large: { name: 'Large Theme', class: 'react-pro-accordion--large' },
    bordered: { name: 'Bordered Theme', class: 'react-pro-accordion--bordered' },
    minimal: { name: 'Minimal Theme', class: 'react-pro-accordion--minimal' },
    card: { name: 'Card Theme', class: 'react-pro-accordion--card' },
  };

  // Custom theme example
  const customThemeStyles = `
    .custom-theme {
      --accordion-border-color: #9b4d96;
      --accordion-bg-color: #fdf6fd;
      --accordion-item-border-color: #e0c3df;
      --accordion-trigger-color: #6b3e66;
      --accordion-trigger-hover-bg: #f0e6ef;
      --accordion-trigger-expanded-color: #9b4d96;
      --accordion-trigger-expanded-bg: #f0e6ef;
      --accordion-border-radius: 20px;
      --accordion-trigger-padding: 1.25rem;
    }
  `;

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <style>{customThemeStyles}</style>

      <h1>Built-in Themes</h1>
      <p>Choose from 7+ professionally designed themes</p>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setCurrentTheme(key)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              background: currentTheme === key ? '#4299e1' : '#e2e8f0',
              color: currentTheme === key ? 'white' : '#2d3748',
              border: 'none',
              borderRadius: '5px',
              transition: 'all 0.2s',
            }}
          >
            {theme.name}
          </button>
        ))}
      </div>

      <div className={themes[currentTheme].class}>
        <Accordion className={themes[currentTheme].class}>
          <AccordionItem id="theme1">
            <AccordionTrigger>{themes[currentTheme].name} Example</AccordionTrigger>
            <AccordionContent>
              This accordion is using the {themes[currentTheme].name.toLowerCase()}. Each theme is
              carefully crafted for different use cases and design preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="theme2">
            <AccordionTrigger>Theme Features</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>🎨 Consistent color schemes</li>
                <li>📏 Proper spacing and sizing</li>
                <li>🎯 Optimized for readability</li>
                <li>🌈 Easy to customize further</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <h2 style={{ marginTop: '30px' }}>Custom Theme Example</h2>
      <div className="custom-theme">
        <Accordion className="custom-theme">
          <AccordionItem id="custom1">
            <AccordionTrigger>🎨 Purple Custom Theme</AccordionTrigger>
            <AccordionContent>
              You can create your own custom themes using CSS variables. Override any of the default
              variables to match your brand!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="custom2">
            <AccordionTrigger>How to Create Custom Themes</AccordionTrigger>
            <AccordionContent>
              <pre
                style={{
                  background: '#f0f0f0',
                  padding: '10px',
                  borderRadius: '5px',
                  overflow: 'auto',
                }}
              >
                {`.custom-theme {
  --accordion-border-color: #your-color;
  --accordion-bg-color: #your-color;
  --accordion-trigger-color: #your-color;
  --accordion-border-radius: your-radius;
}`}
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default ThemesExample;
