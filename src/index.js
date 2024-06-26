import 'modern-normalize';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-module05">
      <App />
    </BrowserRouter>
  </StrictMode>
);
