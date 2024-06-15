import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  initializeIcons,
  loadTheme,
} from '@teaocha/ui-common';
import { theme } from './theme';
import { App } from './App';
import './styles/initialize.scss';

loadTheme(theme);
initializeIcons();

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
