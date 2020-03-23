import React from 'react';

import ReactDOM from 'react-dom';

import AuditionPage from './audition-page'

import {BrowserRouter} from "react-router-dom"

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><AuditionPage/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});