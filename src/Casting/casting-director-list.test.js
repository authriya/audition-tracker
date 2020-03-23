import React from 'react';

import ReactDOM from 'react-dom';

import CastingList from './casting-director-list'

import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><CastingList/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});