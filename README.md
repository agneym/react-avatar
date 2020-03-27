# React Avatar

<p>
  <a href="https://www.npmjs.com/package/@agney/react-avatar" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@agney/react-avatar">
  </a>
  <a href="https://github.com/agneym/react-avatar/actions">
    <img src="https://github.com/agneym/react-avatar/workflows/Node%20CI/badge.svg" />
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
1. Exposes a hook to use/generate gravatar for a user.
1. Exposes a context so you can configure avatar components across your application.

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
|:-------------:	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------	|
| src 	| Source of image to be displayed 	|  	|
| text 	| Text to be displayed as fallback 	|  	|
| imageAlt 	| Alt tag for image  	| '' - decorative 	|
| shape 	| shape of avatar. options: 'circle' | 'square' 	| circle 	|
| htmlWidth 	| width of image element and text fallback. 	| 100% 	|
| htmlHeight 	| height of image element and text fallback 	| same as `htmlWidth` 	|
| backgrounds 	| Array of background colors  	| ['#3c40c6','#ffa801','#485460','#0be881','#f53b57'] 	|
| bgColor 	| background color for specific text fallback. 	| picks random from `backgrounds`, this changes according to `text` prop passed in. 	|
| textColor 	| text color for specific text fallback 	| readable dark or light color depending on background. 	|
| textProcessor 	| function to process visible text inside the avatar. Original text will be used for hashing so even ones with same initials inside avatar can have different backgrounds. 	| (text) => text 	|
| className 	| className on the wrapper. can be used for wrapping with CSS-in-JS frameworks 	|  	|

See [Storybook](https://agneym.github.io/react-avatar/?path=/docs) for more examples and code snippets.

### Context 

Package exposes a context in the form of `AvatarContext`. 

```javascript
import { Avatar, AvatarContext } from '../.';

function App() {
  const contextValue = React.useMemo(() => ({
    backgrounds: ['#000000', '#DD2C00', '#6200EA', '#3F51B5'], // Any props used by Avatar can be used here.
  }), []);
  return (
    <AvatarContext.Provider>
      <div style={{ display: 'flex' }}>
        <Avatar
          htmlWidth='150px'
          text="Fallback"
          backgrounds={['red']}
          textColor='white'
        />
        <Avatar
          htmlWidth='150px'
          text="AJ"
        />
      </div>
    </AvatarContext.Provider>
  )
}
```
Values on the Context Provider are overridden by any props that are on the individual component. Context Provider is not compulsory for usage of Avatar component. Read more about [Context API on docs](https://reactjs.org/docs/context.html).


### `useGravatar` hook

Gravatars or Globally Recognized Avatars is a free service that allows you to share profile pictures/avatars across different sites and services. `react-avatar` exposes a hook that makes it easier for you to request and use these gravatars in your application.

#### Usage:

```javascript
import React from "react";
import { Avatar, useGravatar } from "@agney/react-avatar";

const App = () => {
  const url = useGravatar('person@email.com');
  return (
    <Avatar
      src={url}
      text="CM"
    />
  );
}

export default App;
```

#### API

| Argument 	| Description 	| Default 	|
|---------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------	|
| email 	| Email of the person for which gravatar is to be fetched 	|  	|
| config 	| configuration object. following fields are part of this object 	|  	|
| config.size 	| number representing height & width of image. 1px up to 2048px 	| 80 	|
| config.defaultImage 	| If the image is not available, gravatar defaults to this property. You can provide a custom URL image to default to or one of the alternatives that Gravatar supports. 	|  	|
| config.forceDefault 	| Always returns the default image if true 	| false 	|
| config.rating 	| Gravatar allows users to self rate their images. If required pass in a higher rating.  	| g 	|

For a complete list of available options, view [Gravatar docs](https://en.gravatar.com/site/implement/images/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/agneym/react-avatar/issues).

### Development

We use [`yarn` v1](https://classic.yarnpkg.com/) for development. 

```sh
yarn
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
