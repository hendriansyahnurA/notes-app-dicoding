import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import NotesApp from './components/NotesApp';
createRoot(document.getElementById('root')).render(<NotesApp />);
