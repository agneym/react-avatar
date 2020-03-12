import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
