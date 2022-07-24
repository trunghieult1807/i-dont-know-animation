import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/RouteSwitch'
import {Cursor} from "./utils/magnetize";
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
