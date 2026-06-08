import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'react-pro-accordion';
import 'react-pro-accordion/style.css';

function DynamicItemsExample() {
  const [items, setItems] = useState([
    {
      id: Date.now() + 1,
      title: 'Item 1',
      content: 'This is the first item',
      timestamp: new Date(),
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      title: `Item ${items.length + 1}`,
      content: `This item was added at ${new Date().toLocaleTimeString()}`,
      timestamp: new Date(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, content: `Updated at ${new Date().toLocaleTimeString()}` }
          : item
      )
    );
  };

  const clearAll = () => {
    setItems([]);
  };

  const addMultipleItems = () => {
    const newItems = [];
    for (let i = 0; i < 3; i++) {
      newItems.push({
        id: Date.now() + i,
        title: `Bulk Item ${items.length + i + 1}`,
        content: `Added in bulk at ${new Date().toLocaleTimeString()}`,
        timestamp: new Date(),
      });
    }
    setItems([...items, ...newItems]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Dynamic Items Example</h1>
      <p>Add, remove, and update accordion items dynamically</p>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={addItem}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            background: '#4299e1',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          ➕ Add Item
        </button>
        <button
          onClick={addMultipleItems}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            background: '#48bb78',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          📦 Add 3 Items
        </button>
        <button
          onClick={clearAll}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            background: '#f56565',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          🗑️ Clear All
        </button>
      </div>

      <div
        style={{
          marginBottom: '10px',
          padding: '10px',
          background: '#f7fafc',
          borderRadius: '5px',
        }}
      >
        <strong>Total Items:</strong> {items.length}
      </div>

      <Accordion mode="multiple" allowMultiple={true}>
        {items.map((item) => (
          <AccordionItem key={item.id} id={String(item.id)}>
            <AccordionTrigger>
              {item.title}
              <div style={{ display: 'flex', gap: '5px', marginLeft: 'auto' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateItem(item.id);
                  }}
                  style={{ padding: '2px 8px', fontSize: '12px', cursor: 'pointer' }}
                >
                  ✏️
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(item.id);
                  }}
                  style={{ padding: '2px 8px', fontSize: '12px', cursor: 'pointer' }}
                >
                  ❌
                </button>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>{item.content}</p>
              <small>ID: {item.id}</small>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {items.length === 0 && (
        <div
          style={{
            padding: '40px',
            textAlign: 'center',
            background: '#f7fafc',
            borderRadius: '5px',
          }}
        >
          No items to display. Click "Add Item" to get started!
        </div>
      )}

      <div
        style={{ marginTop: '20px', padding: '10px', background: '#f0f9ff', borderRadius: '4px' }}
      >
        <strong>💡 Dynamic Features:</strong>
        <ul style={{ marginTop: '5px', marginBottom: '0' }}>
          <li>Add/remove items at any time</li>
          <li>Update content dynamically</li>
          <li>Perfect for data-driven applications</li>
          <li>Works with any data source (API, database, etc.)</li>
        </ul>
      </div>
    </div>
  );
}

export default DynamicItemsExample;
