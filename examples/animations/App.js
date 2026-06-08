import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function AnimationsExample() {
  const [animationDuration, setAnimationDuration] = useState(200);
  const [animationEasing, setAnimationEasing] = useState('cubic-bezier(0.4, 0, 0.2, 1)');
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [animationStatus, setAnimationStatus] = useState('');

  const easings = {
    Default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    Linear: 'linear',
    'Ease In': 'ease-in',
    'Ease Out': 'ease-out',
    'Ease In Out': 'ease-in-out',
    Bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    Smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Animation Configuration</h1>
      <p>Customize accordion animations</p>

      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          background: '#f0f9ff',
          borderRadius: '8px',
        }}
      >
        <h3>Animation Controls</h3>

        <div style={{ marginBottom: '15px' }}>
          <label>Duration: {animationDuration}ms </label>
          <input
            type="range"
            min="0"
            max="600"
            step="10"
            value={animationDuration}
            onChange={(e) => {
              setAnimationDuration(parseInt(e.target.value));
              setDisableAnimation(false);
            }}
            style={{ width: '100%', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Easing Function: </label>
          <select
            value={animationEasing}
            onChange={(e) => setAnimationEasing(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          >
            {Object.entries(easings).map(([name, value]) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={disableAnimation}
              onChange={(e) => setDisableAnimation(e.target.checked)}
            />
            Disable Animation
          </label>
        </div>

        {animationStatus && (
          <div
            style={{
              marginTop: '10px',
              padding: '5px',
              background: '#e6f7e6',
              borderRadius: '4px',
            }}
          >
            {animationStatus}
          </div>
        )}
      </div>

      <Accordion
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        disableAnimation={disableAnimation}
        onAnimationStart={(id) => setAnimationStatus(`Animation started for ${id}`)}
        onAnimationEnd={(id) => setAnimationStatus(`Animation completed for ${id}`)}
      >
        <AccordionItem id="anim1">
          <AccordionTrigger>Test Animation Speed</AccordionTrigger>
          <AccordionContent>
            <p>Current settings:</p>
            <ul>
              <li>Duration: {animationDuration}ms</li>
              <li>Easing: {animationEasing}</li>
              <li>Animation: {disableAnimation ? 'Disabled' : 'Enabled'}</li>
            </ul>
            <p>Click to see the animation in action!</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="anim2">
          <AccordionTrigger>Spring Physics Example</AccordionTrigger>
          <AccordionContent>
            The animation includes both height and opacity transitions for smooth, professional
            results.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div
        style={{ marginTop: '20px', padding: '10px', background: '#f7fafc', borderRadius: '4px' }}
      >
        <strong>💡 Tips:</strong>
        <ul style={{ marginTop: '5px', marginBottom: '0' }}>
          <li>150-200ms is the sweet spot for fast, responsive animations</li>
          <li>Use 0ms or disableAnimation for instant open/close</li>
          <li>Bounce easing creates playful, spring-like motion</li>
        </ul>
      </div>
    </div>
  );
}

export default AnimationsExample;
