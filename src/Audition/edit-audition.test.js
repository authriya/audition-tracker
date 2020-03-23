import React from 'react';

import ReactDOM from 'react-dom';

import EditAudition from './edit-audition'

import {BrowserRouter} from "react-router-dom"

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><EditAudition/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});