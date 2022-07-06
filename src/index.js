import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

const renderRoot = createRoot(document.getElementById('root'));

renderRoot.render(<App />);