import React from 'react';

import ReactDOM from 'react-dom';

import CastingPage from './casting-page'

import {BrowserRouter} from "react-router-dom"

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><CastingPage/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});