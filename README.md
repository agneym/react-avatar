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
  <a href="https://www.npmjs.com/package/@agney/react-avatar" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/types/scrub-js.svg" />
  </a>
  <a href="https://prettier.io">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  </a>
</p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Create Image Avatars with text based fallbacks. 

[Demo Storybook](https://agneym.github.io/react-avatar/?path=/docs/)

# Features ✨

1. Ability to render image avatar or text avatar as circle or square.
1. Ability to render text based fallbacks for images for the time they take to load or error.
1. Renders text based avatars and backgrounds based on text passed in.
1. Autoscales text if it doesn't fit the container width.
1. Automatically determines readable text color depending on background.

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

## API

|  	| Description 	| Default Value 	|
|:-----------:	|------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------	|
| src 	| Source of image to be displayed 	|  	|
| text 	| Text to be displayed as fallback 	|  	|
| imageAlt 	| Alt tag for image  	| '' - decorative 	|
| shape 	| shape of avatar. options: 'circle' or 'square' 	| circle 	|
| htmlWidth 	| width of image element and text fallback. 	| 100% 	|
| htmlHeight 	| height of image element and text fallback 	| same as `htmlWidth` 	|
| backgrounds 	| Array of background colors  	| ['#3c40c6','#ffa801','#485460','#0be881','#f53b57'] 	|
| bgColor 	| background color for specific text fallback. 	| picks random from `backgrounds`, this changes according to `text` prop passed in. 	|
| textColor 	| text color for specific text fallback 	| readable dark or light color depending on background. 	|
| className 	| className on the wrapper. can be used for wrapping with CSS-in-JS frameworks 	|  	|

See [Storybook](https://agneym.github.io/react-avatar/?path=/docs) for more examples and code snippets.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/agneym/react-avatar/issues).

### Development

We use [`yarn` v1](https://classic.yarnpkg.com/) for development. 

```sh
yarn i
yarn start

# To run example
cd example
yarn start

# Running storybook
yarn run storybook
```

### Run tests

```sh
yarn test
```

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://twitter.com/agneymenon" target="_blank">
  <img alt="Twitter: agneymenon" src="https://img.shields.io/twitter/follow/agneymenon.svg?style=social" />
</a>

## 📝 License

Copyright © 2020 [Agney Menon <agney@outlook.in>](https://github.com/agneym).<br />
This project is [MIT](https://github.com/agneym/react-avatar/blob/master/LICENSE) licensed.
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://blog.agney.dev"><img src="https://avatars0.githubusercontent.com/u/8883368?v=4" width="100px;" alt=""/><br /><sub><b>Agney Menon</b></sub></a><br /><a href="https://github.com/agneym/react-avatar/commits?author=agneym" title="Documentation">📖</a> <a href="https://github.com/agneym/react-avatar/commits?author=agneym" title="Code">💻</a> <a href="#ideas-agneym" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
