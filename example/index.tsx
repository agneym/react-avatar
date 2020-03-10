import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../.';

const App = () => {
  return (
    <div>
      <Avatar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
