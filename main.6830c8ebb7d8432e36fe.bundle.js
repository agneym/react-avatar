(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Avatar})),__webpack_require__.d(__webpack_exports__,"b",(function(){return AvatarContext})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useGravatar}));__webpack_require__(17),__webpack_require__(46),__webpack_require__(38),__webpack_require__(4),__webpack_require__(16),__webpack_require__(39),__webpack_require__(19),__webpack_require__(249),__webpack_require__(21),__webpack_require__(273);var react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),styled_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(195),polished_lib_color_readableColor__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(445),polished_lib_color_readableColor__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(polished_lib_color_readableColor__WEBPACK_IMPORTED_MODULE_12__),md5__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(442),md5__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_13__);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _templateObject(){var data=_taggedTemplateLiteralLoose(["\n  border-radius: ",";\n  overflow: hidden;\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n"]);return _templateObject=function(){return data},data}var AvatarWrapper=Object(styled_components__WEBPACK_IMPORTED_MODULE_11__.a)("div")(_templateObject(),(function(props){return"square"===props.shape?0:"50%"}),(function(props){return props.htmlWidth}),(function(props){return props.htmlWidth}),(function(props){return props.htmlHeight}),(function(props){return props.bgColor}),(function(props){return props.textColor||polished_lib_color_readableColor__WEBPACK_IMPORTED_MODULE_12___default()(props.bgColor)}));function _templateObject$1(){var data=_taggedTemplateLiteralLoose(["\n  margin: 0;\n  vertical-align: middle;\n  font-weight: bold;\n  white-space: nowrap;\n  text-transform: uppercase;\n  transform: scale(",");\n"]);return _templateObject$1=function(){return data},data}var Text=Object(styled_components__WEBPACK_IMPORTED_MODULE_11__.a)("p")(_templateObject$1(),(function(props){return props.scale})),TextAvatar=function(_ref){var htmlWidth=_ref.htmlWidth,htmlHeight=_ref.htmlHeight,className=_ref.className,shape=_ref.shape,text=_ref.text,bgColor=_ref.bgColor,textColor=_ref.textColor,backgrounds=_ref.backgrounds,textProcessor=_ref.textProcessor,_useMemo=Object(react__WEBPACK_IMPORTED_MODULE_10__.useMemo)((function(){var processedText=textProcessor(text);if(bgColor)return{backgroundColor:bgColor,processedText:processedText};var index=function(text){for(var sum=0,i=0;i<text.length;i+=1)sum+=text.charCodeAt(i);return sum}(text)%backgrounds.length;return{backgroundColor:backgrounds[index],processedText:processedText}}),[text,bgColor,backgrounds]),backgroundColor=_useMemo.backgroundColor,processedText=_useMemo.processedText,containerRef=Object(react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null),textRef=Object(react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(1),scale=_useState[0],setScale=_useState[1];return Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)((function(){var container=containerRef.current,text=textRef.current;if(container&&text){var containerWidth=container.offsetWidth,textWidth=text.offsetWidth;setScale(containerWidth-8<textWidth?(containerWidth-8)/textWidth:1)}}),[text,htmlWidth,htmlHeight]),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AvatarWrapper,{htmlWidth:htmlWidth,htmlHeight:htmlHeight,className:className,shape:shape,bgColor:backgroundColor,textColor:textColor,ref:containerRef},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Text,{ref:textRef,scale:scale},processedText))};function _templateObject$2(){var data=_taggedTemplateLiteralLoose(["\n  object-fit: cover;\n"]);return _templateObject$2=function(){return data},data}var Rating,Image=styled_components__WEBPACK_IMPORTED_MODULE_11__.a.img(_templateObject$2()),ImageAvatar=function(_ref){var htmlWidth=_ref.htmlWidth,htmlHeight=_ref.htmlHeight,className=_ref.className,shape=_ref.shape,src=_ref.src,imageAlt=_ref.imageAlt;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AvatarWrapper,{htmlWidth:htmlWidth,htmlHeight:htmlHeight,className:className,shape:shape,bgColor:"transparent"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Image,{src:src,alt:imageAlt,width:htmlWidth,height:htmlHeight}))},defaultProps={src:"",imageAlt:"",shape:"circle",text:"",htmlWidth:"100%",backgrounds:["#3c40c6","#ffa801","#485460","#0be881","#f53b57"],className:"",textProcessor:function(text){return text}},AvatarContext=Object(react__WEBPACK_IMPORTED_MODULE_10__.createContext)(defaultProps),Avatar=function(props){var avatarContext=Object(react__WEBPACK_IMPORTED_MODULE_10__.useContext)(AvatarContext),normalizedProps=_extends({},defaultProps,{},avatarContext,{},props),src=normalizedProps.src,imageAlt=normalizedProps.imageAlt,shape=normalizedProps.shape,text=normalizedProps.text,textProcessor=normalizedProps.textProcessor,htmlWidth=normalizedProps.htmlWidth,htmlHeight=normalizedProps.htmlHeight,backgrounds=normalizedProps.backgrounds,textColor=normalizedProps.textColor,bgColor=normalizedProps.bgColor,className=normalizedProps.className,height=htmlHeight||htmlWidth;return function(_ref){var src=_ref.src,onLoad=_ref.onLoad,onError=_ref.onError,isMounted=Object(react__WEBPACK_IMPORTED_MODULE_10__.useRef)(!0),_useState=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1),hasLoaded=_useState[0],setHasLoaded=_useState[1];return Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)((function(){if(src){var image=new window.Image;image.src=src,image.onload=function(event){isMounted.current&&(setHasLoaded(!0),onLoad&&onLoad(event))},image.onerror=function(event){isMounted.current&&(setHasLoaded(!1),onError&&onError(event))}}}),[src,onLoad,onError]),Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)((function(){return function(){isMounted.current=!1}}),[]),hasLoaded}({src:src})?react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ImageAvatar,{src:src,imageAlt:imageAlt,htmlWidth:htmlWidth,htmlHeight:height,className:className,shape:shape}):react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(TextAvatar,{text:text,htmlWidth:htmlWidth,htmlHeight:height,className:className,shape:shape,bgColor:bgColor,textColor:textColor,backgrounds:backgrounds,textProcessor:textProcessor})};function useGravatar(email,_temp){var _ref=void 0===_temp?{}:_temp,size=_ref.size,defaultImage=_ref.defaultImage,forceDefault=_ref.forceDefault,rating=_ref.rating;return Object(react__WEBPACK_IMPORTED_MODULE_10__.useMemo)((function(){var processedEmail=email.trim().toLowerCase(),hash=md5__WEBPACK_IMPORTED_MODULE_13___default()(processedEmail),params=new URLSearchParams;return size&&params.set("s",size+""),defaultImage&&params.set("d",encodeURI(defaultImage)),forceDefault&&params.set("f","y"),rating&&params.set("r",rating),"//www.gravatar.com/avatar/"+hash+"?"+params.toString()}),[email])}!function(Rating){Rating.g="g",Rating.pg="pg",Rating.r="r",Rating.x="x"}(Rating||(Rating={})),Avatar.__docgenInfo={description:"Render user avatars with text fallbacks.\r\n@component",methods:[],displayName:"Avatar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/react-avatar.esm.js"]={name:"Avatar",docgenInfo:Avatar.__docgenInfo,path:"dist/react-avatar.esm.js"})},1243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(441);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1267)],module)}.call(this,__webpack_require__(1244)(module))},1267:function(module,exports,__webpack_require__){var map={"./0-Avatar.stories.mdx":1268,"./1-useGravatar.stories.mdx":1276};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1267},1268:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"imageUrl",(function(){return imageUrl})),__webpack_require__.d(__webpack_exports__,"textAvatar",(function(){return textAvatar})),__webpack_require__.d(__webpack_exports__,"imageFallback",(function(){return imageFallback})),__webpack_require__.d(__webpack_exports__,"backgroundsTextAvatar",(function(){return backgroundsTextAvatar})),__webpack_require__.d(__webpack_exports__,"textScaling",(function(){return textScaling})),__webpack_require__.d(__webpack_exports__,"avatarContext",(function(){return avatarContext})),__webpack_require__.d(__webpack_exports__,"textProcessorFunction",(function(){return textProcessorFunction}));__webpack_require__(2),__webpack_require__(45),__webpack_require__(41),__webpack_require__(11),__webpack_require__(72),__webpack_require__(18),__webpack_require__(4),__webpack_require__(63),__webpack_require__(44),__webpack_require__(426),__webpack_require__(427),__webpack_require__(6),__webpack_require__(28),__webpack_require__(87),__webpack_require__(42),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(23),___WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(10);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Meta,{title:"Avatar",component:___WEBPACK_IMPORTED_MODULE_18__.a,mdxType:"Meta"}),_ref3=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Installation:"),_ref4=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Ability to render image avatar or text avatar as circle or square."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Ability to render text based fallbacks for images for the time they take to load or error."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Renders text based avatars and backgrounds based on text passed in."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Autoscales text if it doesn't fit the container width."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Automatically determines readable text color depending on background."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Exposes a hook to use/generate gravatar for a user."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("li",{parentName:"ol"},"Exposes a context so you can configure avatar components across your application.")),_ref5=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Loads image specified in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"src")," prop."),_ref6=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Image URL",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.png",htmlWidth:"100px",mdxType:"Avatar"}))),_ref7=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Adds in text specified with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"text")," prop."),_ref8=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Text Avatar",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"CJ",htmlWidth:"100px",mdxType:"Avatar"}))),_ref9=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Shows text based avatar till image completes loading. If image load errors out, shows text based fallback."),_ref10=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.png",text:"BI",htmlWidth:"100px",mdxType:"Avatar"}),_ref11=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.ng",text:"BI",htmlWidth:"100px",mdxType:"Avatar"}),_ref12=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Allows to choose from an array of backgrounds for text fallbacks."),_ref13=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"The backgrounds choosen are always consistent with the text that is passed in. So the same avatars will be generated on refresh."),_ref14=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"react-avatar")," call automatically detect your background color and determine a readable text color. You can also pass in a specific text color to disable this behavior."),_ref15=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"If you pass in more text than that fits in the width specified by your container, then ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"react-avatar")," auto-scales making the text smaller to fit your content."),_ref16=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Text Scaling",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Lucy Heartfilia",htmlWidth:"100px",mdxType:"Avatar"}))),_ref17=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Package exposes a context in the form of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"AvatarContext"),". "),_ref18=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{htmlWidth:"150px",text:"AJ",mdxType:"Avatar"}),_ref19=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"With the prop ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"textProcessor")," it is possible to define how the text needs to be transformed before being shown in the Avatar itself. This is useful because the longer text is used for hashing and hence even people with same initials can end up with different colored consistent backgrounds."),_ref20=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Here is an example of using the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("inlineCode",{parentName:"p"},"textProcessor")," function to select an emoji from the text passed in consistently:"),_ref21=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Ersa Scarlett",mdxType:"Avatar"}),_ref22=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Natsu Dragneel",mdxType:"Avatar"}),_ref23=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Kaori Miyazono",mdxType:"Avatar"});function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h1",{id:"react-avatar"},"React Avatar"),_ref3,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"npm i @agney/react-avatar\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h1",{id:"features-"},"Features ✨"),_ref4,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h1",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Avatar } from "@agney/react-avatar";\n\nconst App = () => {\n  return (\n    <Avatar\n      src="https://gravatar.com/avatar/7c4ff521986b4ff8d29440beec01972d?s=400&d=robohash&r=x"\n      text="CM"\n    />\n  );\n}\n\nexport default App;\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"image-url"},"Image URL:"),_ref5,_ref6,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"text-avatar"},"Text Avatar"),_ref7,_ref8,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"image-with-text-avatar-as-fallback"},"Image with Text Avatar as fallback."),_ref9,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Image Fallback",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},_ref10,_ref11))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"text-backgrounds"},"Text Backgrounds"),_ref12,_ref13,_ref14,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Backgrounds Text Avatar",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"AI",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px",mdxType:"Avatar"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"OV",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px",mdxType:"Avatar"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"OP",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px",mdxType:"Avatar"})))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"text-autoscaling"},"Text Autoscaling"),_ref15,_ref16,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h3",{id:"context"},"Context"),_ref17,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Avatar Context",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.b.Provider,{value:{backgrounds:["#000000","#DD2C00","#6200EA","#3F51B5"]}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{htmlWidth:"150px",text:"Fallback",backgrounds:["red"],textColor:"white",mdxType:"Avatar"}),_ref18)))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("p",null,"Values on the Context Provider are overridden by any props that are on the individual component. Context Provider is not compulsory for usage of Avatar component. Read more about ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("a",_extends({parentName:"p"},{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:["nofollow","noopener","noreferrer"]}),"Context API on docs"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("h2",{id:"text-processor-function"},"Text Processor Function"),_ref19,_ref20,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.Story,{name:"Text Processor Function",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.b.Provider,{value:{textProcessor:function textProcessor(text){return["😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂"][text.split("").reduce((function(s,t){return s+t.charCodeAt(0)}),0)%21]},htmlWidth:"100px"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex",fontSize:"2em"}},_ref21,_ref22,_ref23)))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _ref24=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.png",htmlWidth:"100px"}),imageUrl=function(){return _ref24};imageUrl.displayName="imageUrl",imageUrl.story={},imageUrl.story.name="Image URL",imageUrl.story.parameters={mdxSource:"<Avatar src='https://www.w3schools.com/howto/img_avatar.png' htmlWidth=\"100px\" />"};var _ref25=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"CJ",htmlWidth:"100px"}),textAvatar=function(){return _ref25};textAvatar.displayName="textAvatar",textAvatar.story={},textAvatar.story.name="Text Avatar",textAvatar.story.parameters={mdxSource:"<Avatar text='CJ' htmlWidth=\"100px\" />"};var _ref26=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.png",text:"BI",htmlWidth:"100px"}),_ref27=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{src:"https://www.w3schools.com/howto/img_avatar.ng",text:"BI",htmlWidth:"100px"}),imageFallback=function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},_ref26,_ref27)};imageFallback.displayName="imageFallback",imageFallback.story={},imageFallback.story.name="Image Fallback",imageFallback.story.parameters={mdxSource:"<div style={{\n  display: 'flex'\n}}>\n      <Avatar src='https://www.w3schools.com/howto/img_avatar.png' text='BI' htmlWidth=\"100px\" />\n      <Avatar src='https://www.w3schools.com/howto/img_avatar.ng' text='BI' htmlWidth=\"100px\" />\n    </div>"};var backgroundsTextAvatar=function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"AI",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"OV",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"OP",backgrounds:["#B90E05","#3620BC","#E2E2ED","#A88282"],htmlWidth:"100px"}))};backgroundsTextAvatar.displayName="backgroundsTextAvatar",backgroundsTextAvatar.story={},backgroundsTextAvatar.story.name="Backgrounds Text Avatar",backgroundsTextAvatar.story.parameters={mdxSource:"<div style={{\n  display: 'flex'\n}}>\n      <Avatar text='AI' backgrounds={['#B90E05', '#3620BC', '#E2E2ED', '#A88282']} htmlWidth=\"100px\" />\n      <Avatar text='OV' backgrounds={['#B90E05', '#3620BC', '#E2E2ED', '#A88282']} htmlWidth=\"100px\" />\n      <Avatar text='OP' backgrounds={['#B90E05', '#3620BC', '#E2E2ED', '#A88282']} htmlWidth=\"100px\" />\n    </div>"};var _ref28=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Lucy Heartfilia",htmlWidth:"100px"}),textScaling=function(){return _ref28};textScaling.displayName="textScaling",textScaling.story={},textScaling.story.name="Text Scaling",textScaling.story.parameters={mdxSource:"<Avatar text='Lucy Heartfilia' htmlWidth=\"100px\" />"};var _ref29=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{htmlWidth:"150px",text:"AJ"}),avatarContext=function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.b.Provider,{value:{backgrounds:["#000000","#DD2C00","#6200EA","#3F51B5"]}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{htmlWidth:"150px",text:"Fallback",backgrounds:["red"],textColor:"white"}),_ref29))};avatarContext.displayName="avatarContext",avatarContext.story={},avatarContext.story.name="Avatar Context",avatarContext.story.parameters={mdxSource:"<AvatarContext.Provider value={{\n  backgrounds: ['#000000', '#DD2C00', '#6200EA', '#3F51B5']\n}}>\n      <div style={{\n    display: 'flex'\n  }}>\n        <Avatar htmlWidth='150px' text=\"Fallback\" backgrounds={['red']} textColor='white' />\n        <Avatar htmlWidth='150px' text=\"AJ\" />\n      </div>\n    </AvatarContext.Provider>"};var _ref30=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Ersa Scarlett"}),_ref31=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Natsu Dragneel"}),_ref32=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.a,{text:"Kaori Miyazono"}),textProcessorFunction=function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(___WEBPACK_IMPORTED_MODULE_18__.b.Provider,{value:{textProcessor:function textProcessor(text){return["😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂"][text.split("").reduce((function(s,t){return s+t.charCodeAt(0)}),0)%21]},htmlWidth:"100px"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)("div",{style:{display:"flex",fontSize:"2em"}},_ref30,_ref31,_ref32))};textProcessorFunction.displayName="textProcessorFunction",textProcessorFunction.story={},textProcessorFunction.story.name="Text Processor Function",textProcessorFunction.story.parameters={mdxSource:"<AvatarContext.Provider value={{\n  textProcessor: text => ['😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂'][text.split('').reduce((s, t) => s + t.charCodeAt(0), 0) % 21],\n  htmlWidth: '100px'\n}}>\n      <div style={{\n    display: 'flex',\n    fontSize: '2em'\n  }}>\n        <Avatar text=\"Ersa Scarlett\" />\n        <Avatar text=\"Natsu Dragneel\" />\n        <Avatar text=\"Kaori Miyazono\" />\n      </div>\n    </AvatarContext.Provider>"};var componentMeta={title:"Avatar",includeStories:["imageUrl","textAvatar","imageFallback","backgroundsTextAvatar","textScaling","avatarContext","textProcessorFunction"]};componentMeta.parameters=componentMeta.parameters||{};var _ref33=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_17__.AddContext,{mdxStoryNameToKey:{"Image URL":"imageUrl","Text Avatar":"textAvatar","Image Fallback":"imageFallback","Backgrounds Text Avatar":"backgroundsTextAvatar","Text Scaling":"textScaling","Avatar Context":"avatarContext","Text Processor Function":"textProcessorFunction"},mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__.mdx)(MDXContent,null));componentMeta.parameters.docs=function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({},componentMeta.parameters.docs||{},{page:function page(){return _ref33}}),__webpack_exports__.default=componentMeta},1276:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(45),__webpack_require__(41),__webpack_require__(11),__webpack_require__(4),__webpack_require__(63),__webpack_require__(44),__webpack_require__(426),__webpack_require__(427),__webpack_require__(6),__webpack_require__(42),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(23),___WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(10);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.Meta,{title:"useGravatar",component:___WEBPACK_IMPORTED_MODULE_14__.c,mdxType:"Meta"}),_ref3=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("p",null,"Installation:");function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("h1",{id:"usegravatar-hook"},"useGravatar Hook"),_ref3,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"npm i @agney/react-avatar\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("h2",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Avatar, useGravatar } from "@agney/react-avatar";\n\nconst App = () => {\n  const url = useGravatar(\'person@example.com\')\n  return (\n    <Avatar\n      src={url}\n      text="CM"\n    />\n  );\n}\n\nexport default App;\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("h2",{id:"api"},"API"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Argument"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Default"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"email"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Email of the person for which gravatar is to be fetched"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"config"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"configuration object. following fields are part of this object"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"config.size"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"number representing height & width of image. 1px up to 2048px"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"80")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"config.defaultImage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"If the image is not available, gravatar defaults to this property. You can provide a custom URL image to default to or one of the alternatives that Gravatar supports."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"config.forceDefault"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Always returns the default image if true"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"false")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"config.rating"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Gravatar allows users to self rate their images. If required pass in a higher rating."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("td",_extends({parentName:"tr"},{align:null}),"g")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("p",null,"For a complete list of available options, view ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)("a",_extends({parentName:"p"},{href:"https://en.gravatar.com/site/implement/images/",target:"_blank",rel:["nofollow","noopener","noreferrer"]}),"Gravatar docs")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"useGravatar",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{};var _ref4=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_13__.AddContext,{mdxStoryNameToKey:{},mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_12__.mdx)(MDXContent,null));componentMeta.parameters.docs=function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({},componentMeta.parameters.docs||{},{page:function page(){return _ref4}}),__webpack_exports__.default=componentMeta},446:function(module,exports,__webpack_require__){__webpack_require__(447),__webpack_require__(589),__webpack_require__(590),__webpack_require__(1242),module.exports=__webpack_require__(1243)},509:function(module,exports){}},[[446,1,2]]]);
//# sourceMappingURL=main.6830c8ebb7d8432e36fe.bundle.js.map