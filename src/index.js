import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
//import {Controller} from 'mind-ar/dist/mindar-image.prod.js';
//console.log("MindARThree", Controller);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

