import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionIcon,
} from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function CustomIconsExample() {
  // Custom emoji icons
  const EmojiIcon = ({ isExpanded }) => (
    <span style={{ fontSize: '20px' }}>{isExpanded ? '📖' : '📚'}</span>
  );

  // Animated SVG icon
  const AnimatedIcon = ({ isExpanded }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={{
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  // Font Awesome style (using Unicode)
  const FontAwesomeIcon = ({ isExpanded }) => (
    <span style={{ fontSize: '18px', fontFamily: 'FontAwesome' }}>{isExpanded ? '▼' : '▶'}</span>
  );

  // Material Design style
  const MaterialIcon = ({ isExpanded }) => (
    <span className="material-icons" style={{ fontSize: '20px' }}>
      {isExpanded ? 'expand_less' : 'expand_more'}
    </span>
  );

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Custom Icons Examples</h1>

      <h2>1. Emoji Icons</h2>
      <Accordion>
        <AccordionItem id="emoji1">
          <AccordionTrigger>
            Using Emojis
            <AccordionIcon expandedIcon={<span>🔽</span>} collapsedIcon={<span>▶</span>} />
          </AccordionTrigger>
          <AccordionContent>
            You can use any emoji as an icon! Perfect for fun, playful interfaces.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>2. Animated SVG Icons</h2>
      <Accordion>
        <AccordionItem id="animated1">
          <AccordionTrigger>
            Animated Chevron
            <AccordionIcon
              expandedIcon={<AnimatedIcon isExpanded={true} />}
              collapsedIcon={<AnimatedIcon isExpanded={false} />}
            />
          </AccordionTrigger>
          <AccordionContent>
            SVG icons can be animated with CSS transforms for a polished look.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>3. Left Position Icons</h2>
      <Accordion>
        <AccordionItem id="left1">
          <AccordionTrigger iconPosition="left">
            <AccordionIcon expandedIcon={<span>▼</span>} collapsedIcon={<span>►</span>} />
            Icon on the Left
          </AccordionTrigger>
          <AccordionContent>
            Icons can be positioned on the left or right using the iconPosition prop.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>4. Component-Based Icons</h2>
      <Accordion>
        <AccordionItem id="component1">
          <AccordionTrigger>
            React Components as Icons
            <AccordionIcon
              expandedIcon={<EmojiIcon isExpanded={true} />}
              collapsedIcon={<EmojiIcon isExpanded={false} />}
            />
          </AccordionTrigger>
          <AccordionContent>
            Use any React component as an icon for maximum flexibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CustomIconsExample;
