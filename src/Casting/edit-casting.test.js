import React from 'react';

import ReactDOM from 'react-dom';

import EditCasting from './edit-casting'

import {BrowserRouter} from "react-router-dom"

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><EditCasting/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});