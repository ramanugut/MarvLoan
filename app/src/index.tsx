import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './features/auth/Login';

const App = () => <Login />;

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}
