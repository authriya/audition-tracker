import React from 'react';

import ReactDOM from 'react-dom';

import CastingItem from './casting-item'

import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><CastingItem/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});