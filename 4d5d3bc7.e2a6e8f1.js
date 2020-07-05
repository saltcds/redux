(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),c=n(6),a=(n(0),n(184)),o={id:"three-principles",title:"3\uac00\uc9c0 \uc6d0\uce59",description:"\uc18c\uac1c > 3\uac00\uc9c0 \uc6d0\uce59: Redux \uc0ac\uc6a9\uc758 3\uac00\uc9c0 \uc911\uc694 \uc6d0\uce59",hide_title:!0},i={id:"introduction/three-principles",title:"3\uac00\uc9c0 \uc6d0\uce59",description:"\uc18c\uac1c > 3\uac00\uc9c0 \uc6d0\uce59: Redux \uc0ac\uc6a9\uc758 3\uac00\uc9c0 \uc911\uc694 \uc6d0\uce59",source:"@site/../docs_kr/introduction/ThreePrinciples.md",permalink:"/introduction/three-principles",sidebar:"docs",previous:{title:"Core Concepts",permalink:"/introduction/core-concepts"},next:{title:"\uae30\uc874 \uae30\uc220",permalink:"/introduction/prior-art"}},l=[{value:"\uc9c4\uc2e4\uc740 \ud558\ub098\uc758 \uc6d0\ucc9c\uc73c\ub85c\ubd80\ud130",id:"\uc9c4\uc2e4\uc740-\ud558\ub098\uc758-\uc6d0\ucc9c\uc73c\ub85c\ubd80\ud130",children:[]},{value:"\uc0c1\ud0dc\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\ub2e4",id:"\uc0c1\ud0dc\ub294-\uc77d\uae30-\uc804\uc6a9\uc774\ub2e4",children:[]},{value:"\ubcc0\ud654\ub294 \uc21c\uc218 \ud568\uc218\ub85c \uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4",id:"\ubcc0\ud654\ub294-\uc21c\uc218-\ud568\uc218\ub85c-\uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"3\uac00\uc9c0-\uc6d0\uce59"},"3\uac00\uc9c0 \uc6d0\uce59"),Object(a.b)("p",null,"Redux\uc758 \uae30\ucd08\ub97c \uc774\ub8e8\ub294 \uc6d0\uce59\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),Object(a.b)("h3",{id:"\uc9c4\uc2e4\uc740-\ud558\ub098\uc758-\uc6d0\ucc9c\uc73c\ub85c\ubd80\ud130"},"\uc9c4\uc2e4\uc740 \ud558\ub098\uc758 \uc6d0\ucc9c\uc73c\ub85c\ubd80\ud130"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/glossary#%EC%83%81%ED%83%9C"}),"\uc0c1\ud0dc"),"\ub294 \ud558\ub098\uc758 ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/glossary#%EC%8A%A4%ED%86%A0%EC%96%B4"}),"\uc2a4\ud1a0\uc5b4")," \uc548\uc5d0 \ud558\ub098\uc758 \uac1d\uccb4 \ud2b8\ub9ac \uad6c\uc870\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4.")),Object(a.b)("p",null,"\uc774\ub97c \ud1b5\ud574 \ubc94\uc6a9\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(universal application, \ud558\ub098\uc758 \ucf54\ub4dc \ubca0\uc774\uc2a4\ub85c \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \ucf54\ub4dc)\uc744 \ub9cc\ub4e4\uae30 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\ub85c\ubd80\ud130 \uac00\uc838\uc628 \uc0c1\ud0dc\ub294 \uc2dc\ub9ac\uc5bc\ub77c\uc774\uc988\ub418\uac70\ub098(serialized) \uc218\ud654\ub418\uc5b4(hydrated) \uc804\ub2ec\ub418\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ucd94\uac00\uc801\uc778 \ucf54\ub529 \uc5c6\uc774\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud558\ub098\uc758 \uc0c1\ud0dc \ud2b8\ub9ac\ub9cc\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub514\ubc84\uae45\uc5d0\ub3c4 \uc6a9\uc774\ud560 \uac83\uc785\ub2c8\ub2e4. \ube60\ub978 \uac1c\ubc1c \uc0ac\uc774\ud074\uc744 \uc704\ud574 \uac1c\ubc1c\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud574\ub193\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub098\uc758 \uc0c1\ud0dc \ud2b8\ub9ac\ub9cc\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\uc804\uc5d0\ub294 \uad49\uc7a5\ud788 \uad6c\ud604\ud558\uae30 \uc5b4\ub824\uc6e0\ub358 \uae30\ub2a5\uc778 \uc2e4\ud589\ucde8\uc18c/\ub2e4\uc2dc\uc2e4\ud589(undo/redo)\uc744 \uc190\uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"console.log(store.getState());\n\n{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [{\n    text: 'Consider using Redux',\n    completed: true,\n  }, {\n    text: 'Keep all state in a single tree',\n    completed: false\n  }]\n}\n")),Object(a.b)("h3",{id:"\uc0c1\ud0dc\ub294-\uc77d\uae30-\uc804\uc6a9\uc774\ub2e4"},"\uc0c1\ud0dc\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\ub2e4"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc0c1\ud0dc\ub97c \ubcc0\ud654\uc2dc\ud0a4\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \ubb34\uc2a8 \uc77c\uc774 \ubc8c\uc5b4\uc9c0\ub294 \uc9c0\ub97c \ubb18\uc0ac\ud558\ub294 ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/glossary#%EC%95%A1%EC%85%98"}),"\uc561\uc158")," \uac1d\uccb4\ub97c \uc804\ub2ec\ud558\ub294 \ubc29\ubc95\ubfd0\uc785\ub2c8\ub2e4.")),Object(a.b)("p",null,"\uc774\ub97c \ud1b5\ud574\uc11c \ubdf0\ub098 \ub124\ud2b8\uc6cc\ud06c \ucf5c\ubc31\uc5d0\uc11c \uacb0\ucf54 \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ubc14\uafb8\uc9c0 \ubabb \ud55c\ub2e4\ub294 \uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \uc0c1\ud0dc \ubcc0\ud654\ub294 \uc911\uc559\uc5d0\uc11c \uad00\ub9ac\ub418\uba70 \ubaa8\ub4e0 \uc561\uc158\uc740 \uc5c4\uaca9\ud55c \uc21c\uc11c\uc5d0 \uc758\ud574 \ud558\ub098\ud558\ub098 \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0, \uc2e0\uacbd\uc368\uc11c \uad00\ub9ac\ud574\uc57c\ud560 \ubbf8\ubb18\ud55c \uacbd\uc7c1 \uc0c1\ud0dc\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc740 \uadf8\uc800 \ud3c9\ubc94\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uae30\ub85d\uc744 \ub0a8\uae38 \uc218 \uc788\uace0, \uc2dc\ub9ac\uc5bc\ub77c\uc774\uc988\ud560 \uc218 \uc788\uc73c\uba70, \uc800\uc7a5\ud560 \uc218 \uc788\uace0, \uc774\ud6c4\uc5d0 \ud14c\uc2a4\ud2b8\ub098 \ub514\ubc84\uae45\uc744 \uc704\ud574\uc11c \uc7ac\ud604\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"store.dispatch({\n  type: 'COMPLETE_TODO',\n  index: 1\n})\n\nstore.dispatch({\n  type: 'SET_VISIBILITY_FILTER',\n  filter: 'SHOW_COMPLETED'\n})\n")),Object(a.b)("h3",{id:"\ubcc0\ud654\ub294-\uc21c\uc218-\ud568\uc218\ub85c-\uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4"},"\ubcc0\ud654\ub294 \uc21c\uc218 \ud568\uc218\ub85c \uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc561\uc158\uc5d0 \uc758\ud574 \uc0c1\ud0dc \ud2b8\ub9ac\uac00 \uc5b4\ub5bb\uac8c \ubcc0\ud654\ud558\ub294 \uc9c0\ub97c \uc9c0\uc815\ud558\uae30 \uc704\ud574 \ud504\ub85c\uadf8\ub798\uba38\ub294 \uc21c\uc218 ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"}),"\ub9ac\ub4c0\uc11c"),"\ub97c \uc791\uc131\ud574\uc57c\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,"\ub9ac\ub4c0\uc11c\ub294 \uadf8\uc800 \uc774\uc804 \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \ubc1b\uc544 \ub2e4\uc74c \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc785\ub2c8\ub2e4. \uc774\uc804 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ub300\uc2e0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc11c \ubc18\ud658\ud574\uc57c\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uae30\uc5b5\ud574\uc57c \ud569\ub2c8\ub2e4. \ucc98\uc74c\uc5d0\ub294 \ud558\ub098\uc758 \ub9ac\ub4c0\uc11c\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\uc9c0\ub9cc, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc131\uc7a5\ud574\ub098\uac00\uba74 \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \ud2b9\uc815\ud55c \ubd80\ubd84\ub4e4\uc744 \uc870\uc791\ud558\ub294 \ub354 \uc791\uc740 \ub9ac\ub4c0\uc11c\ub4e4\ub85c \ub098\ub204\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c\ub294 \uadf8\uc800 \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 \ud638\ucd9c\ub418\ub294 \uc21c\uc11c\ub97c \uc815\ud558\uac70\ub098 \ucd94\uac00\uc801\uc778 \ub370\uc774\ud130\ub97c \ub118\uae38 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc2ec\uc9c0\uc5b4 \ud398\uc774\uc9c0\ub124\uc774\uc158\uacfc \uac19\uc774 \uc77c\ubc18\uc801\uc778 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function visibilityFilter(state = 'SHOW_ALL', action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return action.filter\n    default:\n      return state\n  }\n}\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case 'COMPLETE_TODO':\n      return [\n        ...state.slice(0, action.index),\n        Object.assign({}, state[action.index], {\n          completed: true\n        }),\n        ...state.slice(action.index + 1)\n      ]\n    default:\n      return state\n  }\n}\n\nimport { combineReducers, createStore } from 'redux'\nlet reducer = combineReducers({ visibilityFilter, todos })\nlet store = createStore(reducer)\n")),Object(a.b)("p",null,"\uc774\uac8c \uc804\ubd80\uc785\ub2c8\ub2e4. Redux\uac00 \ubb34\uc5c7\uc778\uc9c0\uc5d0 \ub300\ud574\uc11c \uc804\ubd80 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,O=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?c.a.createElement(O,i({ref:t},p,{components:n})):c.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);