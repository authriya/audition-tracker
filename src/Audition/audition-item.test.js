import React from 'react';

import ReactDOM from 'react-dom';

import AuditionItem from './audition-item'

import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><AuditionItem/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});