import React from 'react';

import ReactDOM from 'react-dom';

import AddAudition from './add-audition'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddAudition/>, div);

  ReactDOM.unmountComponentAtNode(div);
});