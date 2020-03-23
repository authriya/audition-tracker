import React from 'react';

import ReactDOM from 'react-dom';

import AuditionList from './audition-list'

import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><AuditionList/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});