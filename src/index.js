import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

reportWebVitals();
