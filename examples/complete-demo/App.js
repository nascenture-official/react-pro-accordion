import React, { useState, useRef } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionIcon,
  useAccordionControls,
} from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function CompleteDemo() {
  const [theme, setTheme] = useState('light');
  const [animationSpeed, setAnimationSpeed] = useState(200);
  const [mode, setMode] = useState('single');
  const [logs, setLogs] = useState([]);
  const accordionRef = useRef(null);

  const addLog = (message) => {
    setLogs((prev) => [`${new Date().toLocaleTimeString()}: ${message}`, ...prev].slice(0, 10));
  };

  const themes = ['light', 'dark', 'compact', 'large', 'bordered', 'minimal', 'card'];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        🚀 React Pro Accordion - Complete Demo
      </h1>

      {/* Controls Panel */}
      <div
        style={{
          padding: '20px',
          background: '#f7fafc',
          borderRadius: '10px',
          marginBottom: '30px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3>Control Panel</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
          }}
        >
          <div>
            <label>Theme: </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            >
              {themes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Mode: </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            >
              <option value="single">Single (one at a time)</option>
              <option value="multiple">Multiple (can open many)</option>
            </select>
          </div>

          <div>
            <label>Animation Speed: {animationSpeed}ms</label>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label>Actions: </label>
            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
              <button onClick={() => accordionRef.current?.openAll()} style={buttonStyle}>
                Open All
              </button>
              <button onClick={() => accordionRef.current?.closeAll()} style={buttonStyle}>
                Close All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Accordion */}
      <div className={`react-pro-accordion--${theme}`}>
        <Accordion
          ref={accordionRef}
          mode={mode}
          allowMultiple={mode === 'multiple'}
          animationDuration={animationSpeed}
          onOpen={(id) => addLog(`Opened: ${id}`)}
          onClose={(id) => addLog(`Closed: ${id}`)}
          onToggle={(id, isOpen) => addLog(`Toggled: ${id} → ${isOpen ? 'open' : 'closed'}`)}
          onAnimationStart={(id) => addLog(`Animation started: ${id}`)}
          onAnimationEnd={(id) => addLog(`Animation ended: ${id}`)}
        >
          <AccordionItem id="demo1">
            <AccordionHeader level={3}>
              <AccordionTrigger>
                🎯 Feature 1: Multiple Modes
                <AccordionIcon expandedIcon={<span>🔽</span>} collapsedIcon={<span>▶</span>} />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <p>React Pro Accordion supports both single and multiple modes:</p>
              <ul>
                <li>
                  <strong>Single Mode:</strong> Only one item can be open at a time
                </li>
                <li>
                  <strong>Multiple Mode:</strong> Open multiple items simultaneously
                </li>
                <li>Switch between modes using the control panel above</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="demo2">
            <AccordionTrigger>⚡ Feature 2: Smooth Animations</AccordionTrigger>
            <AccordionContent>
              <p>Customizable animations with multiple easing options:</p>
              <ul>
                <li>Configurable duration (0-500ms)</li>
                <li>Spring physics support</li>
                <li>Height + opacity transitions</li>
                <li>60fps performance</li>
              </ul>
              <p>
                Current speed: <strong>{animationSpeed}ms</strong>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="demo3">
            <AccordionTrigger>♿ Feature 3: Full Accessibility</AccordionTrigger>
            <AccordionContent>
              <p>WCAG compliant with full keyboard support:</p>
              <ul>
                <li>Enter/Space - Open/close items</li>
                <li>Arrow keys - Navigate between items</li>
                <li>Home/End - Jump to first/last item</li>
                <li>Screen reader announcements</li>
                <li>Focus management</li>
              </ul>
              <p>Try using your keyboard to navigate!</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="demo4">
            <AccordionTrigger>🎨 Feature 4: Customizable Themes</AccordionTrigger>
            <AccordionContent>
              <p>7+ built-in themes and CSS variable support:</p>
              <ul>
                <li>Light, Dark, Compact, Large</li>
                <li>Bordered, Minimal, Card</li>
                <li>Custom themes with CSS variables</li>
                <li>Dark mode ready</li>
              </ul>
              <p>
                Current theme: <strong>{theme}</strong>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="demo5">
            <AccordionTrigger>🔧 Feature 5: Imperative API</AccordionTrigger>
            <AccordionContent>
              <p>Programmatic control via ref methods:</p>
              <pre
                style={{
                  background: '#f0f0f0',
                  padding: '10px',
                  borderRadius: '5px',
                  overflow: 'auto',
                }}
              >
                {`accordionRef.current.open('id')
accordionRef.current.close('id')
accordionRef.current.toggle('id')
accordionRef.current.openAll()
accordionRef.current.closeAll()
accordionRef.current.getExpandedItems()`}
              </pre>
              <button onClick={() => accordionRef.current?.toggle('demo5')} style={buttonStyle}>
                Toggle this item programmatically
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Event Log */}
      <div
        style={{
          marginTop: '30px',
          padding: '15px',
          background: '#f7fafc',
          borderRadius: '10px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3>Event Log</h3>
        <div
          style={{
            maxHeight: '200px',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          {logs.length === 0 ? (
            <p>Click on accordion items to see events...</p>
          ) : (
            logs.map((log, i) => <div key={i}>• {log}</div>)
          )}
        </div>
        <button onClick={() => setLogs([])} style={{ marginTop: '10px', ...buttonStyle }}>
          Clear Logs
        </button>
      </div>

      {/* Feature Summary */}
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '10px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h3>✨ All Features Included</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
            marginTop: '15px',
          }}
        >
          <div>✓ Single/Multiple Modes</div>
          <div>✓ Controlled/Uncontrolled</div>
          <div>✓ Imperative API</div>
          <div>✓ Custom Animations</div>
          <div>✓ Full Accessibility</div>
          <div>✓ 7+ Themes</div>
          <div>✓ Custom Icons</div>
          <div>✓ RTL Support</div>
          <div>✓ Lazy Rendering</div>
          <div>✓ Dynamic Items</div>
          <div>✓ Nested Accordions</div>
          <div>✓ SSR Compatible</div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '5px 10px',
  cursor: 'pointer',
  background: '#4299e1',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '12px',
};

export default CompleteDemo;
