# React Avatar
<p>
  <a href="https://www.npmjs.com/package/@agney/react-avatar" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@agney/react-avatar">
  </a>
  <a href="https://github.com/agneym/react-avatar#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/agneym/react-avatar/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/agneym/react-avatar" />
  </a>
</p>

> Create Image Avatars with text based fallbacks.

## Install

```sh
npm install @agney/react-avatar
# OR
yarn add @agney/react-avatar
```

Requires React v16.8 or above and Styled Components v4 or above.

## Usage

```javascript
import React from "react";
import { Avatar } from "@agney/react-avatar";

const App = () => {
  return (
    <Avatar
      src="https://gravatar.com/avatar/7c4ff521986b4ff8d29440beec01972d?s=400&d=robohash&r=x"
      text="CM"
    />
  );
}

export default App;
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/agneym/react-avatar/issues).

### Development

```sh
npm i
npm start

# To run example
cd example
npm start

# Running storybook
npm run storybook
```

### Run tests

```sh
npm test
```

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://twitter.com/agneymenon" target="_blank">
  <img alt="Twitter: agneymenon" src="https://img.shields.io/twitter/follow/agneymenon.svg?style=social" />
</a>

## 📝 License

Copyright © 2020 [Agney Menon <agney@outlook.in>](https://github.com/agneym).<br />
This project is [MIT](https://github.com/agneym/react-avatar/blob/master/LICENSE) licensed.