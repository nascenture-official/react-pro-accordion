import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
} from '../src';

describe('Accordion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderAccordion = (props = {}) => {
    return render(
      <Accordion {...props}>
        <AccordionItem id="item1">
          <AccordionHeader>
            <AccordionTrigger>Item 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionHeader>
            <AccordionTrigger>Item 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  it('renders without crashing', () => {
    renderAccordion();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('opens accordion item on trigger click', async () => {
    renderAccordion();
    const trigger = screen.getByText('Item 1');
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.getByText('Content 1')).toBeVisible();
    });
  });

  it('closes accordion item on second click', async () => {
    renderAccordion();
    const trigger = screen.getByText('Item 1');
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Content 1')).not.toBeVisible();
    });
  });

  it('supports single mode by default', async () => {
    renderAccordion();
    const trigger1 = screen.getByText('Item 1');
    const trigger2 = screen.getByText('Item 2');

    fireEvent.click(trigger1);
    fireEvent.click(trigger2);

    await waitFor(() => {
      expect(screen.getByText('Content 2')).toBeVisible();
      expect(screen.queryByText('Content 1')).not.toBeVisible();
    });
  });

  it('supports multiple mode when allowMultiple is true', async () => {
    render(
      <Accordion mode="multiple" allowMultiple={true}>
        <AccordionItem id="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Item 1');
    const trigger2 = screen.getByText('Item 2');

    fireEvent.click(trigger1);
    fireEvent.click(trigger2);

    await waitFor(() => {
      expect(screen.getByText('Content 1')).toBeVisible();
      expect(screen.getByText('Content 2')).toBeVisible();
    });
  });

  it('calls onOpen callback when item opens', async () => {
    const onOpen = vi.fn();
    renderAccordion({ onOpen });

    const trigger = screen.getByText('Item 1');
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(onOpen).toHaveBeenCalledWith('item1');
    });
  });

  it('calls onClose callback when item closes', async () => {
    const onClose = vi.fn();
    renderAccordion({ onClose });

    const trigger = screen.getByText('Item 1');
    fireEvent.click(trigger);
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith('item1');
    });
  });

  it('supports keyboard navigation', async () => {
    renderAccordion();
    const trigger1 = screen.getByText('Item 1');

    trigger1.focus();
    fireEvent.keyDown(trigger1, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('Content 1')).toBeVisible();
    });
  });

  it('supports controlled mode', async () => {
    const onToggle = vi.fn();
    const { rerender } = render(
      <Accordion expanded={['item1']} onToggle={onToggle}>
        <AccordionItem id="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Content 1')).toBeVisible();

    rerender(
      <Accordion expanded={[]} onToggle={onToggle}>
        <AccordionItem id="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    await waitFor(() => {
      expect(screen.queryByText('Content 1')).not.toBeVisible();
    });
  });

  it('disables item when disabled prop is true', () => {
    render(
      <Accordion>
        <AccordionItem id="item1" disabled={true}>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Item 1');
    expect(trigger).toHaveAttribute('aria-disabled', 'true');
    expect(trigger).toHaveAttribute('disabled');
  });

  it('renders custom icons', () => {
    const CustomIcon = () => <span>🔽</span>;
    render(
      <Accordion>
        <AccordionItem id="item1">
          <AccordionTrigger>
            Item 1
            <AccordionIcon expandedIcon={<span>🔼</span>} collapsedIcon={<span>🔽</span>} />
          </AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('🔽')).toBeInTheDocument();
  });

  it('applies custom className to components', () => {
    render(
      <Accordion className="custom-accordion">
        <AccordionItem id="item1" className="custom-item">
          <AccordionHeader className="custom-header">
            <AccordionTrigger className="custom-trigger">Item 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="custom-content">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(document.querySelector('.custom-accordion')).toBeInTheDocument();
    expect(document.querySelector('.custom-item')).toBeInTheDocument();
    expect(document.querySelector('.custom-trigger')).toBeInTheDocument();
  });
});
