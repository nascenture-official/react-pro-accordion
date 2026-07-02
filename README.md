# react-pro-accordion

A powerful, accessible, customizable, and production-ready accordion component library for React.

---

## Features

- **Multiple Modes** — Single, multiple, controlled, and uncontrolled
- **Fully Accessible** — WCAG compliant with complete ARIA support and keyboard navigation
- **Performant** — Optimized with `React.memo`, `useMemo`, `useCallback`, and minimal re-renders
- **Highly Customizable** — CSS variables, 7 built-in themes, custom icons and styles
- **Smooth Animations** — Height and opacity transitions with spring physics
- **Imperative API** — Programmatic control via `ref` methods
- **SSR Ready** — Compatible with Next.js and other server-side rendering frameworks
- **RTL Support** — Full right-to-left language support
- **Lazy Rendering** — Content mounts only when the item is expanded
- **TypeScript** — Full type definitions included
- **Tree-shakeable** — Import only what you need (~8 KB gzipped)

---

## Installation (Change Path Accordingly)

```bash
npm install react-pro-accordion
# or
yarn add react-pro-accordion
```

---

## Quick Start

```jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function App() {
  return (
    <Accordion>
      <AccordionItem id="item1">
        <AccordionTrigger>What is React Pro Accordion?</AccordionTrigger>
        <AccordionContent>
          A powerful, accessible accordion library for React applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem id="item2">
        <AccordionTrigger>Why choose React Pro Accordion?</AccordionTrigger>
        <AccordionContent>
          Superior performance, full accessibility, and extensive customization options.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

## Documentation

### Modes

#### Single (default)

Only one item can be open at a time.

```jsx
<Accordion>
  <AccordionItem id="item1">
    <AccordionTrigger>Title 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem id="item2">
    <AccordionTrigger>Title 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Multiple

Allow multiple items to be open simultaneously.

```jsx
<Accordion mode="multiple" allowMultiple={true}>
  <AccordionItem id="item1">
    <AccordionTrigger>Title 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem id="item2">
    <AccordionTrigger>Title 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Controlled

Manage expanded state externally.

```jsx
function ControlledAccordion() {
  const [expanded, setExpanded] = useState(['item1']);

  const handleToggle = (id, isOpen) => {
    setExpanded((prev) => (isOpen ? [...prev, id] : prev.filter((item) => item !== id)));
  };

  return (
    <Accordion expanded={expanded} onToggle={handleToggle} mode="multiple" allowMultiple={true}>
      <AccordionItem id="item1">
        <AccordionTrigger>Controlled Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem id="item2">
        <AccordionTrigger>Controlled Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

### Imperative API

Use a `ref` to control the accordion programmatically.

```jsx
import { useRef } from 'react';

function ImperativeExample() {
  const accordionRef = useRef();

  return (
    <>
      <button onClick={() => accordionRef.current.openAll()}>Open All</button>
      <button onClick={() => accordionRef.current.closeAll()}>Close All</button>
      <button onClick={() => accordionRef.current.toggle('item1')}>Toggle Item 1</button>

      <Accordion ref={accordionRef}>
        <AccordionItem id="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
```

**Available ref methods:**

| Method               | Description                                     |
| -------------------- | ----------------------------------------------- |
| `open(id)`           | Open a specific item                            |
| `close(id)`          | Close a specific item                           |
| `toggle(id)`         | Toggle a specific item                          |
| `openAll()`          | Open all items                                  |
| `closeAll()`         | Close all items                                 |
| `getExpandedItems()` | Returns an array of currently expanded item IDs |

---

### Custom Icons

```jsx
<Accordion>
  <AccordionItem id="item1">
    <AccordionTrigger>
      Custom Icons
      <AccordionIcon expandedIcon={<span>📖</span>} collapsedIcon={<span>📚</span>} />
    </AccordionTrigger>
    <AccordionContent>Content with custom icons</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### Animations

```jsx
<Accordion
  animationDuration={200}
  animationEasing="cubic-bezier(0.4, 0, 0.2, 1)"
  disableAnimation={false}
  onAnimationStart={(id) => console.log(`Started: ${id}`)}
  onAnimationEnd={(id) => console.log(`Ended: ${id}`)}
>
  {/* items */}
</Accordion>
```

---

### Lazy Rendering

Content is only mounted when the item is first expanded. Useful for performance-sensitive lists.

```jsx
<Accordion lazyRender={true}>
  <AccordionItem id="item1">
    <AccordionTrigger>Lazy Item</AccordionTrigger>
    <AccordionContent>This content renders only when expanded.</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### RTL Support

```jsx
<Accordion dir="rtl">
  <AccordionItem id="item1">
    <AccordionTrigger>مرحبا بكم</AccordionTrigger>
    <AccordionContent>محتوى باللغة العربية</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### Dynamic Items

```jsx
function DynamicAccordion() {
  const [items, setItems] = useState([{ id: '1', title: 'Item 1', content: 'Content 1' }]);

  const addItem = () => {
    const next = items.length + 1;
    setItems((prev) => [
      ...prev,
      { id: String(next), title: `Item ${next}`, content: `Content ${next}` },
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add Item</button>
      <Accordion>
        {items.map((item) => (
          <AccordionItem key={item.id} id={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
```

---

### Custom Hooks

#### `useAccordion`

Build fully custom accordion UI with your own markup.

```jsx
import { useAccordion } from 'react-pro-accordion';

function CustomAccordion() {
  const { open, toggle, isExpanded } = useAccordion({
    defaultExpanded: [],
    allowMultiple: true,
  });

  return (
    <div>
      <button onClick={() => open('item1')}>Open Item 1</button>
      <div>
        <button onClick={() => toggle('item1')}>{isExpanded('item1') ? '▼' : '▶'} Item 1</button>
        {isExpanded('item1') && <div>Content 1</div>}
      </div>
    </div>
  );
}
```

#### `useAccordionControls`

Access control methods from anywhere inside an `<Accordion>` tree.

```jsx
import { useAccordionControls } from 'react-pro-accordion';

function Controls() {
  const { openAll, closeAll, openItem, toggleItem } = useAccordionControls();

  return (
    <div>
      <button onClick={openAll}>Open All</button>
      <button onClick={closeAll}>Close All</button>
      <button onClick={() => openItem('item1')}>Open Item 1</button>
      <button onClick={() => toggleItem('item1')}>Toggle Item 1</button>
    </div>
  );
}
```

**Available hooks:**

| Hook                            | Description                           |
| ------------------------------- | ------------------------------------- |
| `useAccordion(options)`         | Core accordion state and logic        |
| `useAccordionItem(id, options)` | State for an individual item          |
| `useAccordionContext()`         | Access the accordion context directly |
| `useAccordionControls()`        | Access open/close/toggle methods      |
| `useAnimation(options)`         | Custom animation hook                 |

---

## API Reference

### `<Accordion>`

| Prop                | Type                                    | Default                          | Description                                    |
| ------------------- | --------------------------------------- | -------------------------------- | ---------------------------------------------- |
| `mode`              | `'single' \| 'multiple'`                | `'single'`                       | Controls whether one or many items can be open |
| `allowMultiple`     | `boolean`                               | `false`                          | Allow multiple items open at once              |
| `collapsible`       | `boolean`                               | `true`                           | Allow all items to be closed simultaneously    |
| `defaultExpanded`   | `string[]`                              | `[]`                             | IDs of items expanded on initial render        |
| `expanded`          | `string[]`                              | `undefined`                      | Controlled list of expanded item IDs           |
| `lazyRender`        | `boolean`                               | `false`                          | Only render content when the item is expanded  |
| `animationDuration` | `number`                                | `200`                            | Transition duration in milliseconds            |
| `animationEasing`   | `string`                                | `'cubic-bezier(0.4, 0, 0.2, 1)'` | CSS easing function                            |
| `disableAnimation`  | `boolean`                               | `false`                          | Disable all animations                         |
| `dir`               | `'ltr' \| 'rtl'`                        | `'ltr'`                          | Text direction                                 |
| `onOpen`            | `(id: string) => void`                  | —                                | Fires when an item opens                       |
| `onClose`           | `(id: string) => void`                  | —                                | Fires when an item closes                      |
| `onToggle`          | `(id: string, isOpen: boolean) => void` | —                                | Fires on any toggle                            |
| `onOpenAll`         | `() => void`                            | —                                | Fires when all items are opened                |
| `onCloseAll`        | `() => void`                            | —                                | Fires when all items are closed                |
| `onAnimationStart`  | `(id: string) => void`                  | —                                | Fires when an animation begins                 |
| `onAnimationEnd`    | `(id: string) => void`                  | —                                | Fires when an animation ends                   |
| `className`         | `string`                                | `''`                             | Additional CSS class                           |
| `style`             | `object`                                | `{}`                             | Inline styles                                  |
| `as`                | `React.ElementType`                     | `'div'`                          | Custom wrapper element type                    |

---

### `<AccordionItem>`

| Prop              | Type                | Default      | Description                          |
| ----------------- | ------------------- | ------------ | ------------------------------------ |
| `id`              | `string`            | **required** | Unique identifier for this item      |
| `disabled`        | `boolean`           | `false`      | Prevents the item from being toggled |
| `defaultExpanded` | `boolean`           | `false`      | Expands this item on initial render  |
| `className`       | `string`            | `''`         | Additional CSS class                 |
| `style`           | `object`            | `{}`         | Inline styles                        |
| `as`              | `React.ElementType` | `'div'`      | Custom wrapper element type          |

---

### `<AccordionHeader>`

| Prop        | Type                | Default | Description                 |
| ----------- | ------------------- | ------- | --------------------------- |
| `level`     | `number`            | `3`     | Heading level (1–6)         |
| `className` | `string`            | `''`    | Additional CSS class        |
| `style`     | `object`            | `{}`    | Inline styles               |
| `as`        | `React.ElementType` | `'div'` | Custom wrapper element type |

---

### `<AccordionTrigger>`

| Prop           | Type                | Default    | Description                          |
| -------------- | ------------------- | ---------- | ------------------------------------ |
| `iconPosition` | `'left' \| 'right'` | `'right'`  | Position of the expand/collapse icon |
| `className`    | `string`            | `''`       | Additional CSS class                 |
| `style`        | `object`            | `{}`       | Inline styles                        |
| `as`           | `React.ElementType` | `'button'` | Custom wrapper element type          |

---

### `<AccordionIcon>`

| Prop            | Type                | Default  | Description                       |
| --------------- | ------------------- | -------- | --------------------------------- |
| `expandedIcon`  | `React.ReactNode`   | `null`   | Icon shown when item is expanded  |
| `collapsedIcon` | `React.ReactNode`   | `null`   | Icon shown when item is collapsed |
| `className`     | `string`            | `''`     | Additional CSS class              |
| `style`         | `object`            | `{}`     | Inline styles                     |
| `as`            | `React.ElementType` | `'span'` | Custom wrapper element type       |

---

## Styling & Theming

### CSS Variables

All visual properties can be overridden via CSS custom properties.

```css
:root {
  /* Layout */
  --accordion-border-radius: 0.5rem;
  --accordion-border-color: #e2e8f0;
  --accordion-bg-color: #ffffff;
  --accordion-item-border-color: #e2e8f0;
  --accordion-item-expanded-bg: #f7fafc;

  /* Trigger */
  --accordion-trigger-padding: 1rem;
  --accordion-trigger-font-weight: 500;
  --accordion-trigger-color: #1a202c;
  --accordion-trigger-hover-bg: #f7fafc;
  --accordion-trigger-hover-color: #2d3748;
  --accordion-trigger-expanded-color: #2c5282;
  --accordion-trigger-expanded-bg: #ebf8ff;
  --accordion-trigger-gap: 0.5rem;

  /* Content */
  --accordion-content-padding: 1rem;

  /* Animation */
  --accordion-transition-duration: 0.3s;
  --accordion-animation-duration: 0.3s;
  --accordion-animation-easing: cubic-bezier(0.4, 0, 0.2, 1);

  /* Focus */
  --accordion-focus-ring-color: #3182ce;
}
```

### Built-in Themes

Apply a theme by adding the corresponding class to your `<Accordion>`.

```jsx
<Accordion className="react-pro-accordion--dark">   {/* Dark */}
<Accordion className="react-pro-accordion--light">  {/* Light (default) */}
<Accordion className="react-pro-accordion--compact">{/* Compact */}
<Accordion className="react-pro-accordion--large">  {/* Large */}
<Accordion className="react-pro-accordion--bordered">{/* Bordered */}
<Accordion className="react-pro-accordion--minimal">{/* Minimal */}
<Accordion className="react-pro-accordion--card">  {/* Card */}
```

### Custom Theme Example

```css
.my-theme {
  --accordion-border-color: #9b4d96;
  --accordion-bg-color: #fdf6fd;
  --accordion-trigger-color: #6b3e66;
  --accordion-trigger-hover-bg: #f0e6ef;
  --accordion-trigger-expanded-color: #9b4d96;
  --accordion-border-radius: 20px;
  --accordion-trigger-padding: 1.25rem;
}
```

```jsx
<Accordion className="my-theme">{/* items */}</Accordion>
```

### Inline CSS Variable Override

```jsx
<Accordion
  style={{
    '--accordion-border-color': '#c53030',
    '--accordion-bg-color': '#fff5f5',
    '--accordion-trigger-color': '#c53030',
    '--accordion-border-radius': '12px',
  }}
>
  {/* items */}
</Accordion>
```

---

## Accessibility

React Pro Accordion is built with accessibility as a first-class feature.

- **ARIA attributes** — `aria-expanded`, `aria-controls`, `aria-disabled` applied automatically
- **Keyboard navigation** — Full keyboard support out of the box:
  - `Enter` / `Space` — Toggle the focused item
  - `Arrow Up` / `Arrow Down` — Move focus between items
  - `Home` / `End` — Jump to first or last item
- **Screen reader support** — State changes are announced correctly
- **Focus management** — Visible focus indicators on all interactive elements
- **Reduced motion** — Respects `prefers-reduced-motion` media query

---

## Browser Support

| Browser        | Support |
| -------------- | ------- |
| Chrome         | Latest  |
| Firefox        | Latest  |
| Safari         | Latest  |
| Edge           | Latest  |
| iOS Safari     | Latest  |
| Android Chrome | Latest  |

---

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

```

---

## License

This project is under the MIT license.

## Keywords

React, React Accordion, Accordion Component, Collapsible, Expandable, Accessible, ARIA, TypeScript, Animation, React Library, UI Component, SSR, Next.js

## Author

Built with ❤️ by Nascenture.

- Website: https://www.nascenture.com
- React Development Services: https://www.nascenture.com/react-js-development/
