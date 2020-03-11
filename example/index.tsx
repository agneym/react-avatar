import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from '../.';

const App = () => {
  return (
    <div>
      <Avatar
        src='https://gravatar.com/avatar/eabdeb636ae18d3278648438aecd54f0?s=400&d=robohash&r=x'
        htmlWidth='150px'
      />
      <Avatar
        text='Lucy King'
        htmlWidth='150px'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
