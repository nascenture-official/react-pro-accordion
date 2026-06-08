import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useAccordion, useAccordionControls } from '../src/hooks';
import { Accordion, AccordionItem } from '../src';

describe('useAccordion hook', () => {
  it('initializes with default values', () => {
    let hookResult;
    const TestComponent = () => {
      hookResult = useAccordion();
      return null;
    };
    render(<TestComponent />);

    expect(hookResult.expandedItems).toEqual([]);
    expect(typeof hookResult.open).toBe('function');
    expect(typeof hookResult.close).toBe('function');
    expect(typeof hookResult.toggle).toBe('function');
    expect(typeof hookResult.openAll).toBe('function');
    expect(typeof hookResult.closeAll).toBe('function');
    expect(typeof hookResult.isExpanded).toBe('function');
  });

  it('initializes with defaultExpanded items', () => {
    let hookResult;
    const TestComponent = () => {
      hookResult = useAccordion({ defaultExpanded: ['item1'] });
      return null;
    };
    render(<TestComponent />);

    expect(hookResult.expandedItems).toEqual(['item1']);
    expect(hookResult.isExpanded('item1')).toBe(true);
  });

  it('opens an item correctly', () => {
    let hookResult;
    const TestComponent = () => {
      hookResult = useAccordion({ mode: 'single' });
      return null;
    };
    render(<TestComponent />);

    act(() => {
      hookResult.open('item1');
    });

    expect(hookResult.expandedItems).toEqual(['item1']);
  });

  it('closes an item correctly', () => {
    let hookResult;
    const TestComponent = () => {
      hookResult = useAccordion({ defaultExpanded: ['item1'] });
      return null;
    };
    render(<TestComponent />);

    act(() => {
      hookResult.close('item1');
    });

    expect(hookResult.expandedItems).toEqual([]);
  });

  it('toggles an item correctly', () => {
    let hookResult;
    const TestComponent = () => {
      hookResult = useAccordion();
      return null;
    };
    render(<TestComponent />);

    act(() => {
      hookResult.toggle('item1');
    });
    expect(hookResult.expandedItems).toEqual(['item1']);

    act(() => {
      hookResult.toggle('item1');
    });
    expect(hookResult.expandedItems).toEqual([]);
  });
});

describe('useAccordionControls hook', () => {
  const TestComponent = () => {
    const controls = useAccordionControls();
    return (
      <div>
        <button onClick={() => controls.openItem('item1')}>Open</button>
        <button onClick={() => controls.closeItem('item1')}>Close</button>
        <button onClick={() => controls.toggleItem('item1')}>Toggle</button>
        <span data-testid="expanded">{controls.isExpanded('item1').toString()}</span>
      </div>
    );
  };

  it('provides control functions', () => {
    render(
      <Accordion>
        <AccordionItem id="item1">
          <div>Content</div>
        </AccordionItem>
        <TestComponent />
      </Accordion>
    );

    const openButton = screen.getByText('Open');
    const expandedSpan = screen.getByTestId('expanded');

    expect(expandedSpan).toHaveTextContent('false');

    fireEvent.click(openButton);
    expect(expandedSpan).toHaveTextContent('true');
  });
});
