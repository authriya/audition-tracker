import React from 'react';

import ReactDOM from 'react-dom';

import AddButton from './AddButton';

import {BrowserRouter} from "react-router-dom";

import {Link} from 'react-router-dom';

it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><AddButton
        tag={Link}
        to='/add-audition'
        type='button'
        className='AuditionList__add-audition-button'
    /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});