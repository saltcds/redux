(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{141:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return r})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(1),i=o(6),s=(o(0),o(184)),a={id:"computing-derived-data",title:"Computing Derived Data",hide_title:!0},r={id:"recipes/computing-derived-data",title:"Computing Derived Data",description:"# Computing Derived Data",source:"@site/../docs_kr/recipes/ComputingDerivedData.md",permalink:"/recipes/computing-derived-data",sidebar:"docs",previous:{title:"Writing Tests",permalink:"/recipes/writing-tests"},next:{title:"Implementing Undo History",permalink:"/recipes/implementing-undo-history"}},c=[{value:"Motivation for Memoized Selectors",id:"motivation-for-memoized-selectors",children:[]},{value:"Creating a Memoized Selector",id:"creating-a-memoized-selector",children:[]},{value:"Composing Selectors",id:"composing-selectors",children:[]},{value:"Connecting a Selector to the Redux Store",id:"connecting-a-selector-to-the-redux-store",children:[]},{value:"Accessing React Props in Selectors",id:"accessing-react-props-in-selectors",children:[]},{value:"Sharing Selectors Across Multiple Components",id:"sharing-selectors-across-multiple-components",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:c};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"computing-derived-data"},"Computing Derived Data"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"Reselect")," is a simple library for creating memoized, composable ",Object(s.b)("strong",{parentName:"p"},"selector")," functions. Reselect selectors can be used to efficiently compute derived data from the Redux store."),Object(s.b)("h3",{id:"motivation-for-memoized-selectors"},"Motivation for Memoized Selectors"),Object(s.b)("p",null,"Let's revisit the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/basics/usage-with-react"}),"Todos List example"),":"),Object(s.b)("h4",{id:"containersvisibletodolistjs"},Object(s.b)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\n\nconst getVisibleTodos = (todos, filter) => {\n  switch (filter) {\n    case 'SHOW_ALL':\n      return todos\n    case 'SHOW_COMPLETED':\n      return todos.filter(t => t.completed)\n    case 'SHOW_ACTIVE':\n      return todos.filter(t => !t.completed)\n  }\n}\n\nconst mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state.todos, state.visibilityFilter)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)\n\nexport default VisibleTodoList\n")),Object(s.b)("p",null,"In the above example, ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," calls ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," to calculate ",Object(s.b)("inlineCode",{parentName:"p"},"todos"),". This works great, but there is a drawback: ",Object(s.b)("inlineCode",{parentName:"p"},"todos")," is calculated every time the component is updated. If the state tree is large, or the calculation expensive, repeating the calculation on every update may cause performance problems. Reselect can help to avoid these unnecessary recalculations."),Object(s.b)("h3",{id:"creating-a-memoized-selector"},"Creating a Memoized Selector"),Object(s.b)("p",null,"We would like to replace ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," with a memoized selector that recalculates ",Object(s.b)("inlineCode",{parentName:"p"},"todos")," when the value of ",Object(s.b)("inlineCode",{parentName:"p"},"state.todos")," or ",Object(s.b)("inlineCode",{parentName:"p"},"state.visibilityFilter")," changes, but not when changes occur in other (unrelated) parts of the state tree."),Object(s.b)("p",null,"Reselect provides a function ",Object(s.b)("inlineCode",{parentName:"p"},"createSelector")," for creating memoized selectors. ",Object(s.b)("inlineCode",{parentName:"p"},"createSelector")," takes an array of input-selectors and a transform function as its arguments. If the Redux state tree is changed in a way that causes the value of an input-selector to change, the selector will call its transform function with the values of the input-selectors as arguments and return the result. If the values of the input-selectors are the same as the previous call to the selector, it will return the previously computed value instead of calling the transform function."),Object(s.b)("p",null,"Let's define a memoized selector named ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," to replace the non-memoized version above:"),Object(s.b)("h4",{id:"selectorsindexjs"},Object(s.b)("inlineCode",{parentName:"h4"},"selectors/index.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = state => state.visibilityFilter\nconst getTodos = state => state.todos\n\nexport const getVisibleTodos = createSelector(\n  [getVisibilityFilter, getTodos],\n  (visibilityFilter, todos) => {\n    switch (visibilityFilter) {\n      case 'SHOW_ALL':\n        return todos\n      case 'SHOW_COMPLETED':\n        return todos.filter(t => t.completed)\n      case 'SHOW_ACTIVE':\n        return todos.filter(t => !t.completed)\n    }\n  }\n)\n")),Object(s.b)("p",null,"In the example above, ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibilityFilter")," and ",Object(s.b)("inlineCode",{parentName:"p"},"getTodos")," are input-selectors. They are created as ordinary non-memoized selector functions because they do not transform the data they select. ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," on the other hand is a memoized selector. It takes ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibilityFilter")," and ",Object(s.b)("inlineCode",{parentName:"p"},"getTodos")," as input-selectors, and a transform function that calculates the filtered todos list."),Object(s.b)("h3",{id:"composing-selectors"},"Composing Selectors"),Object(s.b)("p",null,"A memoized selector can itself be an input-selector to another memoized selector. Here is ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," being used as an input-selector to a selector that further filters the todos by keyword:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const getKeyword = state => state.keyword\n\nconst getVisibleTodosFilteredByKeyword = createSelector(\n  [getVisibleTodos, getKeyword],\n  (visibleTodos, keyword) =>\n    visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)\n)\n")),Object(s.b)("h3",{id:"connecting-a-selector-to-the-redux-store"},"Connecting a Selector to the Redux Store"),Object(s.b)("p",null,"If you are using ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React Redux"),", you can call selectors as regular functions inside ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps()"),":"),Object(s.b)("h4",{id:"containersvisibletodolistjs-1"},Object(s.b)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { getVisibleTodos } from '../selectors'\n\nconst mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)\n\nexport default VisibleTodoList\n")),Object(s.b)("h3",{id:"accessing-react-props-in-selectors"},"Accessing React Props in Selectors"),Object(s.b)("p",null,"So far we have only seen selectors receive the Redux store state as an argument, but a selector can receive props too."),Object(s.b)("p",null,"For this example, we're going to extend our app to handle multiple Todo lists. Our state needs to be refactored so that it holds multiple todo lists, which each have their own ",Object(s.b)("inlineCode",{parentName:"p"},"todos")," and ",Object(s.b)("inlineCode",{parentName:"p"},"visibilityFilter")," state."),Object(s.b)("p",null,"We also need to refactor our reducers. Now that ",Object(s.b)("inlineCode",{parentName:"p"},"todos")," and ",Object(s.b)("inlineCode",{parentName:"p"},"visibilityFilter")," live within every list's state, we only need one ",Object(s.b)("inlineCode",{parentName:"p"},"todoLists")," reducer to manage our state."),Object(s.b)("h4",{id:"reducersindexjs"},Object(s.b)("inlineCode",{parentName:"h4"},"reducers/index.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { combineReducers } from 'redux'\nimport todoLists from './todoLists'\n\nexport default combineReducers({\n  todoLists\n})\n")),Object(s.b)("h4",{id:"reducerstodolistsjs"},Object(s.b)("inlineCode",{parentName:"h4"},"reducers/todoLists.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Note that we're hard coding three lists here just as an example.\n// In the real world, we'd have a feature to add/remove lists,\n// and this would be empty initially.\nconst initialState = {\n  1: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  },\n  2: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  },\n  3: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  }\n}\n\nconst addTodo = (state, action) => {\n  const todoList = state[action.listId]\n  const { todos } = todoList\n\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      todos: [\n        ...todos,\n        {\n          id: action.id,\n          text: action.text,\n          completed: false\n        }\n      ]\n    }\n  }\n}\n\nconst toggleTodo = (state, action) => {\n  const todoList = state[action.listId]\n  const { todos } = todoList\n\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      todos: todos.map(todo =>\n        (todo.id === action.id)\n          ? {...todo, completed: !todo.completed}\n          : todo\n      )\n    }\n  }\n}\n\nconst setVisibilityFilter = (state, action) => {\n  const todoList = state[action.listId]\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      visibilityFilter: action.filter\n    }\n  }\n}\n\nexport default const todoLists = (state = initialState, action) => {\n  // make sure a list with the given id exists\n  if (!state[action.listId]) {\n    return state;\n  }\n\n  switch (action.type) {\n    case 'ADD_TODO':\n      return addTodo(state, action)\n\n    case 'TOGGLE_TODO':\n      return toggleTodo(state, action)\n\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(state, action)\n\n    default:\n      return state\n  }\n}\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"todoLists")," reducer now handles all three actions. The action creators will now need to be passed a ",Object(s.b)("inlineCode",{parentName:"p"},"listId"),":"),Object(s.b)("h4",{id:"actionsindexjs"},Object(s.b)("inlineCode",{parentName:"h4"},"actions/index.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let nextTodoId = 0\nexport const addTodo = (text, listId) => ({\n  type: 'ADD_TODO',\n  id: nextTodoId++,\n  text,\n  listId\n})\nexport const setVisibilityFilter = (filter, listId) => ({\n  type: 'SET_VISIBILITY_FILTER',\n  filter,\n  listId\n})\nexport const toggleTodo = (id, listId) => ({\n  type: 'TOGGLE_TODO',\n  id,\n  listId\n})\nexport const VisibilityFilters = {\n  SHOW_ALL: 'SHOW_ALL',\n  SHOW_COMPLETED: 'SHOW_COMPLETED',\n  SHOW_ACTIVE: 'SHOW_ACTIVE'\n}\n")),Object(s.b)("h4",{id:"componentstodolistjs"},Object(s.b)("inlineCode",{parentName:"h4"},"components/TodoList.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport PropTypes from 'prop-types'\nimport Todo from './Todo'\nconst TodoList = ({ todos, toggleTodo, listId }) => (\n  <ul>\n    {todos.map(todo => (\n      <Todo\n        key={todo.id}\n        {...todo}\n        onClick={() => toggleTodo(todo.id, listId)}\n      />\n    ))}\n  </ul>\n)\n\nexport default TodoList\n")),Object(s.b)("p",null,"Here is an ",Object(s.b)("inlineCode",{parentName:"p"},"App")," component that renders three ",Object(s.b)("inlineCode",{parentName:"p"},"VisibleTodoList")," components, each of which has a ",Object(s.b)("inlineCode",{parentName:"p"},"listId")," prop:"),Object(s.b)("h4",{id:"componentsappjs"},Object(s.b)("inlineCode",{parentName:"h4"},"components/App.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import React from \'react\'\nimport VisibleTodoList from \'../containers/VisibleTodoList\'\n\nconst App = () => (\n  <div>\n    <VisibleTodoList listId="1" />\n    <VisibleTodoList listId="2" />\n    <VisibleTodoList listId="3" />\n  </div>\n)\n')),Object(s.b)("p",null,"Each ",Object(s.b)("inlineCode",{parentName:"p"},"VisibleTodoList")," container should select a different slice of the state depending on the value of the ",Object(s.b)("inlineCode",{parentName:"p"},"listId")," prop, so we'll modify ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibilityFilter")," and ",Object(s.b)("inlineCode",{parentName:"p"},"getTodos")," to accept a props argument."),Object(s.b)("h4",{id:"selectorstodoselectorsjs"},Object(s.b)("inlineCode",{parentName:"h4"},"selectors/todoSelectors.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = (state, props) =>\n  state.todoLists[props.listId].visibilityFilter\n\nconst getTodos = (state, props) => state.todoLists[props.listId].todos\n\nconst getVisibleTodos = createSelector(\n  [getVisibilityFilter, getTodos],\n  (visibilityFilter, todos) => {\n    switch (visibilityFilter) {\n      case 'SHOW_COMPLETED':\n        return todos.filter(todo => todo.completed)\n      case 'SHOW_ACTIVE':\n        return todos.filter(todo => !todo.completed)\n      default:\n        return todos\n    }\n  }\n)\n\nexport default getVisibleTodos\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"props")," can be passed to ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," from ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const mapStateToProps = (state, props) => {\n  return {\n    todos: getVisibleTodos(state, props)\n  }\n}\n")),Object(s.b)("p",null,"So now ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," has access to ",Object(s.b)("inlineCode",{parentName:"p"},"props"),", and everything seems to be working fine."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"But there is a problem!")),Object(s.b)("p",null,"Using the ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector with multiple instances of the ",Object(s.b)("inlineCode",{parentName:"p"},"visibleTodoList")," container will not correctly memoize:"),Object(s.b)("h4",{id:"containersvisibletodolistjs-2"},Object(s.b)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { getVisibleTodos } from '../selectors'\n\nconst mapStateToProps = (state, props) => {\n  return {\n    // WARNING: THE FOLLOWING SELECTOR DOES NOT CORRECTLY MEMOIZE\n    todos: getVisibleTodos(state, props)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)\n\nexport default VisibleTodoList\n")),Object(s.b)("p",null,"A selector created with ",Object(s.b)("inlineCode",{parentName:"p"},"createSelector")," only returns the cached value when its set of arguments is the same as its previous set of arguments. If we alternate between rendering ",Object(s.b)("inlineCode",{parentName:"p"},'<VisibleTodoList listId="1" />')," and ",Object(s.b)("inlineCode",{parentName:"p"},'<VisibleTodoList listId="2" />'),", the shared selector will alternate between receiving ",Object(s.b)("inlineCode",{parentName:"p"},"{listId: 1}")," and ",Object(s.b)("inlineCode",{parentName:"p"},"{listId: 2}")," as its ",Object(s.b)("inlineCode",{parentName:"p"},"props")," argument. This will cause the arguments to be different on each call, so the selector will always recompute instead of returning the cached value. We'll see how to overcome this limitation in the next section."),Object(s.b)("h3",{id:"sharing-selectors-across-multiple-components"},"Sharing Selectors Across Multiple Components"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The examples in this section require React Redux v4.3.0 or greater")),Object(s.b)("p",null,"In order to share a selector across multiple ",Object(s.b)("inlineCode",{parentName:"p"},"VisibleTodoList")," components ",Object(s.b)("strong",{parentName:"p"},"and")," retain memoization, each instance of the component needs its own private copy of the selector."),Object(s.b)("p",null,"Let's create a function named ",Object(s.b)("inlineCode",{parentName:"p"},"makeGetVisibleTodos")," that returns a new copy of the ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector each time it is called:"),Object(s.b)("h4",{id:"selectorstodoselectorsjs-1"},Object(s.b)("inlineCode",{parentName:"h4"},"selectors/todoSelectors.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = (state, props) =>\n  state.todoLists[props.listId].visibilityFilter\n\nconst getTodos = (state, props) => state.todoLists[props.listId].todos\n\nconst makeGetVisibleTodos = () => {\n  return createSelector(\n    [getVisibilityFilter, getTodos],\n    (visibilityFilter, todos) => {\n      switch (visibilityFilter) {\n        case 'SHOW_COMPLETED':\n          return todos.filter(todo => todo.completed)\n        case 'SHOW_ACTIVE':\n          return todos.filter(todo => !todo.completed)\n        default:\n          return todos\n      }\n    }\n  )\n}\n\nexport default makeGetVisibleTodos\n")),Object(s.b)("p",null,"We also need a way to give each instance of a container access to its own private selector. The ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," argument of ",Object(s.b)("inlineCode",{parentName:"p"},"connect")," can help with this."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"If the ",Object(s.b)("inlineCode",{parentName:"strong"},"mapStateToProps")," argument supplied to ",Object(s.b)("inlineCode",{parentName:"strong"},"connect")," returns a function instead of an object, it will be used to create an individual ",Object(s.b)("inlineCode",{parentName:"strong"},"mapStateToProps")," function for each instance of the container.")),Object(s.b)("p",null,"In the example below ",Object(s.b)("inlineCode",{parentName:"p"},"makeMapStateToProps")," creates a new ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector, and returns a ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function that has exclusive access to the new selector:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const makeMapStateToProps = () => {\n  const getVisibleTodos = makeGetVisibleTodos()\n  const mapStateToProps = (state, props) => {\n    return {\n      todos: getVisibleTodos(state, props)\n    }\n  }\n  return mapStateToProps\n}\n")),Object(s.b)("p",null,"If we pass ",Object(s.b)("inlineCode",{parentName:"p"},"makeMapStateToProps")," to ",Object(s.b)("inlineCode",{parentName:"p"},"connect"),", each instance of the ",Object(s.b)("inlineCode",{parentName:"p"},"VisibleTodosList")," container will get its own ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function with a private ",Object(s.b)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector. Memoization will now work correctly regardless of the render order of the ",Object(s.b)("inlineCode",{parentName:"p"},"VisibleTodoList")," containers."),Object(s.b)("h4",{id:"containersvisibletodolistjs-3"},Object(s.b)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { makeGetVisibleTodos } from '../selectors'\n\nconst makeMapStateToProps = () => {\n  const getVisibleTodos = makeGetVisibleTodos()\n  const mapStateToProps = (state, props) => {\n    return {\n      todos: getVisibleTodos(state, props)\n    }\n  }\n  return mapStateToProps\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(\n  makeMapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default VisibleTodoList\n")),Object(s.b)("h2",{id:"next-steps"},"Next Steps"),Object(s.b)("p",null,"Check out the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"official documentation")," of Reselect as well as its ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect#faq"}),"FAQ"),". Most Redux projects start using Reselect when they have performance problems because of too many derived computations and wasted re-renders, so make sure you are familiar with it before you build something big. It can also be useful to study ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect/blob/master/src/index.js"}),"its source code")," so you don't think it's magic."))}d.isMDXComponent=!0},184:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return u}));var n=o(0),i=o.n(n);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r({},t,{},e)),o},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,u=p["".concat(a,".").concat(m)]||p[m]||b[m]||s;return o?i.a.createElement(u,r({ref:t},l,{components:o})):i.a.createElement(u,r({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,a[1]=r;for(var l=2;l<s;l++)a[l]=o[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);