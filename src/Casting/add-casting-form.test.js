import React from 'react';

import ReactDOM from 'react-dom';

import AddCasting from './add-casting-form'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddCasting/>, div);

  ReactDOM.unmountComponentAtNode(div);
});