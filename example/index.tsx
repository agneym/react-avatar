import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar, AvatarContext, useGravatar, AvatarGroup } from '../.';

const App = () => {
  const contextValue = React.useMemo(() => ({
    backgrounds: ['#000000', '#DD2C00', '#6200EA', '#3F51B5'],
    textProcessor: (text: string) => {
      const textSnippets = text.split(' ');
      return textSnippets.map((snippet) => snippet.charAt(0)).join('');
    }
  }), []);
  const url = useGravatar('agney@outlook.in');
  const url2 = useGravatar('test@example.com');
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
      <Avatar
        src={url}
        text='Agney Menon'
        htmlWidth='150px'
      />
      <Avatar
        shape="square"
        text='Lucy King'
        htmlWidth='150px'
        textColor='#fff'
      />
      <Avatar
        src='https://gravar.com/avatar/eabdeb636ae18d3278648438aecd54f0?s=400&d=robohash&r=x'
        htmlWidth='150px'
        text="Fallback"
      />
      <Avatar
        src='https://gravar.com/avatar/eabdeb636ae18d3278648438aecd54f0?s=400&d=robohash&r=x'
        htmlWidth='150px'
        text="Fallback"
      />
      <AvatarContext.Provider value={contextValue}>
        <div style={{ display: 'flex', fontSize: '1.2em' }}>
          <Avatar
            htmlWidth='150px'
            text="Happy"
            backgrounds={['red']}
            textColor='white'
          />
          <Avatar
            htmlWidth='150px'
            text="Natsu Dragneel"
          />
          <Avatar
            htmlWidth='150px'
            text="Erza Scarlett"
          />
        </div>
      </AvatarContext.Provider>
      <AvatarGroup htmlWidth='100px' spacing={-50}>
        <Avatar
          text="Happy"
          backgrounds={['red']}
          textColor='white'
        />
        <Avatar
          src={url2}
          text="Fallback"
        />
        <Avatar
          text="Erza Scarlett"
        />
        <Avatar
          text="Erza Scarlett"
        />
      </AvatarGroup>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
