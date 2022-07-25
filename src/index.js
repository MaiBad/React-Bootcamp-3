import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactList from './components/ContactList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactList />
  </React.StrictMode>
);
