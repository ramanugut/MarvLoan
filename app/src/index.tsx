import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <div>MarvLoan React App</div>;

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}
