import React, { useState } from 'react';

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true }
];

function App() {
  // 1. State to track if we show sale items only
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  // 2. Filter items based on showSaleOnly state
  const displayedItems = showSaleOnly 
    ? items.filter((item) => item.onSale) 
    : items;

  // 3. Toggle filter function
  const toggleFilter = () => {
    setShowSaleOnly(!showSaleOnly);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h1 className="fw-bold mb-3">Shopping Cart</h1>

      {/* Filter Toggle Button */}
      <button 
        className="btn btn-primary mb-3" 
        onClick={toggleFilter}
      >
        {showSaleOnly ? "Show All Items" : "Show Sale Items Only"}
      </button>

      {/* Item List rendered using .map() */}
      <div className="d-flex flex-column gap-3">
        {displayedItems.map((item) => (
          <div 
            key={item.id} 
            className="card p-3 d-flex flex-row justify-content-between align-items-center shadow-sm"
          >
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold fs-5">{item.name}</span>
              
              {/* Conditional rendering for Bootstrap Badge */}
              {item.onSale && (
                <span className="badge bg-danger">On Sale!</span>
              )}
            </div>

            <span className="fw-bold fs-5">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;