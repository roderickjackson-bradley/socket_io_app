<img src="https://i.imgur.com/wo2tk6A.jpg">

# Client-side Routing in React


| Students Will Be Able To: |
|---|
| Use React Router to define client-side `<Route>` components |
| Render "page" components using React Router |
| Use `<Link>` to create hyperlinks that route client-side |
| Access URL Parameters with React Router  |
| Change Routes Programmatically |

## Road Map

- Set Up
- Intro to React Router
- First Route
- Rendering "Page" Components
- The `Switch` Component
- Adding a `Link` to Change Routes
- Defining Routes with URL Parameters
- Routing Programmatically
- Summary
- Essential Questions

## Set Up

The starter code for this lesson is the same as the solution code from the _Handling Events in React Lab_.

To get set up for this lesson:

- `cd` into the `starter-code/react-mastermind` folder for this lesson.
- Open the project in VS Code: `$ code .`
- Open a terminal in VS Code (`ctrl + backtick`)
- Install the Node modules: `$ npm i`
- Start the React Dev Server: `$ npm start`

## Intro to React Router

[React Router](https://reacttraining.com/react-router/web/guides/quick-start) is by far the most popular third-party library used to provide client-side routing features for React applications.

Early on in this unit we discussed that client-side routing is one of the core enablers of Single-Page Applications (SPAs)...

Enablers of modern-day SPAs built with React:

- Client-side Routing (React Router)
- AJAX (Fetch API, Axios library, etc.)
- Client-side Rendering (React itself)

There are two versions of React Router:

- Web (`react-router-dom`): This is what we will use with React
- Native (`react-router-native`): This is for use with React Native used to develop mobile apps.

#### Philosophy of Using React Router

First, **React Router is based on Components!**

You know how components render other components in React?

React Router follows this very same approach, we will define `<Route>` components that are either rendered or not based upon the current URL in the address bar.

Then, we can declare which of our "page" components we want rendered when a particular `<Route>` component.

In a nutshell, defining routing for a React app using React Router is a matter of declaring a component hierarchy within the top-level `<App>` component.

#### Installing React Router

Since React Router is not part of the React library, it needs to be installed separately:

```
$ npm i react-router-dom
```

Not only is it a fairly large Node package, it might have some vulnerability warnings as well. If so, the output says to run the following command to fix those that can be fixed:

```
$ npm audit fix
```

#### Importing into `<App>`

The top-level component of React Router is the `<BrowserRouter>`.

`<BrowserRouter>` uses the HTML5 History API (`pushState`, `replaceState` and the `popstate` event) to keep the UI in sync with the URL in the address bar.

Since it is a top-level component required for other router-related components to work, a best practice is render `<BrowserRouter>` instead of `<App>` in the entry module - **index.js**.

Before we can use `BrowserRouter`, we need to import it. Let's import it toward to the top of **index.js**:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Import the BrowserRouter and assign an alias
import { BrowserRouter as Router } from 'react-router-dom';
```

> Note the use of `as` to declare an _alias_ called `Router`. This allows for us to use shorter names for longer named exports such `BrowserRouter`.

Now we can refactor and use `ReactDOM.render` to render `<Router>` which in turn renders `<App>`:

```js
ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
```

Mastermind should still be running perfectly with the above refactor.

## First Route

With `<BrowserRouter>` now being rendered, we're free to use the `<Route>` component to define client-side routes.

You can use the `<Route>` component in any component you wish.

However, `<Route>` components are commonly used in the `<App>` component to render "page" components.

Open **App.js** and add the following named import:

```js
import NewGameButton from './components/NewGameButton/NewGameButton';
// Add the Route named import
import { Route } from 'react-router-dom';
```

Now let's add a `<Route>` component to within the `render` method:

```js
render() {
let winTries = this.getWinTries();
return (
  <div className="App">
    <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
    <Route component={GameTimer} />
```

The page should now display an extra `<GameTimer>` under the header.

Let's say we only want the extra `<GameTimer>` to show when the URL has a certain path:

```js
<Route path='/timer' component={GameTimer} />
```

When the page refreshes, the extra `<GameTimer>` is gone.

Now type `localhost:3000/timer` in the address bar and the extra timer is back.

#### Using the `render` Prop on `<Route>`

In our example so far, we used the `component` prop to inform the `<Route>` which component to render, there is a much more flexible and efficient approach.

Instead of using `component` you should use the `render` prop that accepts a function to perform "inline" rendering instead:

```js
<Route path='/timer' render={() => (
  <GameTimer />
)} />
```

The function provided to the `render` prop should return the UI just like a `render` method does.

Although the syntax is a bit more complex, it allows for the passing of props whereas this was not possible when using `component`:

```js
<Route path='/timer' render={(props) => (
  <GameTimer {...props} />
)} />
```

The `{...props}` is a useful way to pass all key:value pairs in an object as props!

Let's use React Developer Tools to see what props the `<Route>` component automatically passes:

<img src="https://i.imgur.com/03IKYlP.png"> 

There are three objects being passed:

- `history`: Great for changing routes programmatically
- `location`: Provides access to query strings
- `match`: Provides access to URL Parameters

## Rendering "Page" Components

In your full-stack projects so far, you've had a nav bar with links used to access the application's main pages.

A full-stack React app can work the same way where links are used to route to "page" components.

Separating "page" components in your app that are then rendered by `<Route>` components is a great way to help organize the large amount of components that exist in a typical React app.

In this lesson, we are going to define a root route that renders the game as it currently exists.

As a practice exercise you will define a `/settings` route used to display a settings page.

#### Organizing "Page" Components

To help organize the components in the app, we'll create a dedicated folder that will hold "page" components:

```
$ mkdir src/pages
```

The first "page" component we're going to put in there is the `<App>` component itself.

Let's refactor by creating an **src/pages/App** folder first:

```
$ mkdir src/pages/App
```

Now let's move the **App**-related files into their new home:

```
$ mv src/App.* src/pages/App/
```

Unfortunately the move will require several imports to be corrected. First in **index.js**:

```js
import App from './pages/App/App';
```

Now all of the components being imported in **App.js** need to go up two levels to access the **components** folder.  Let me show you how to easily change all of them using the VS Code shortcut key `cmd + D` to update as follows:

```js
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
```

The app should be back up and running now.

#### Create the `<GamePage>` Component

For the root route we want to render a `<GamePage>` component responsible for rendering most of the components currently being rendered by `<App>`.

Note that it makes sense to name our "page" components by suffixing them with `Page`.

Time to stub up `<GamePage>`:

```
$ mkdir src/pages/GamePage
```

Now create **src/pages/GamePage/GamePage.jsx**:

```
touch src/pages/GamePage/GamePage.jsx
```

Unfortunately refactoring is often more tedious than coding from scratch. But it has to be done...

`<App>` will continue to hold react-mastermind's state. So we'll be coding `<GamePage>` as a Function Component and passing to it all of the necessary props...

Let's stub up `<GamePage>` in **GamePage.js**:

```js
import React from 'react';

const GamePage = (props) => {

  return (
    <p>GamePage</p>
  );

};

export default GamePage;
```

Let's import it into **App.js**:

```js
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import GamePage from '../../pages/GamePage/GamePage';
```

Then test render it:

```js
render() {
  let winTries = this.getWinTries();
  return (
    <div className="App">
      {/* test render */}
      <GamePage/>
```

Okay, let's copy the entire contents of `<App>`'s `render` method,  paste it in `<GamePage>` and refactor as follows:

1. Delete the `<Route path='/timer'>...` we messed around with.

2. IMPORTANT: Delete the `<GamePage />` unless you want your machine to melt.

3. Delete the `<header>` because that's going to remain in `<App>`.

4. Transfer the following imports from **App.js** to **GamePage.jsx**:

	```js
	import GameBoard from '../../components/GameBoard/GameBoard';
	import ColorPicker from '../../components/ColorPicker/ColorPicker';
	import GameTimer from '../../components/GameTimer/GameTimer';
	import NewGameButton from '../../components/NewGameButton/NewGameButton';
	``` 

5. Update the `render` method in **App.js** so that it only renders the `<header>` and a `<Route>` for the [exact](https://reacttraining.com/react-router/web/api/Route/exact-bool) path of `/` (root):

	```js
	render() {
	  let winTries = this.getWinTries();
	  return (
	    <div className="App">
	      <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
	      <Route exact path='/' render={() =>
	        <GamePage
	          winTries={winTries}
	          colors={colors}
	          selColorIdx={this.state.selColorIdx}
	          guesses={this.state.guesses}
	          handleColorSelection={this.handleColorSelection}
	          handleNewGameClick={this.handleNewGameClick}
	          handlePegClick={this.handlePegClick}
	          handleScoreClick={this.handleScoreClick}
	        />
	      } />
	    </div>
	  );
	}
	```

	Note that we are adding an additional `winTries` prop because the footer that uses it has been moved to `<GamePage>`.
	
6. Back in **GamePage.jsx** update the two references to the `colors` prop

	```js
	colors={colors}
	```
	to be
	
	```js
	colors={props.colors}
	```
	
7. Remove the `let winTries = this.getWinTries();` line and update the footer in two places to use `props.winTries` instead.

8. Still in **GamePage.jsx**, update the three props that reference `this.state` and the two that reference `this` to be `props` instead.

Here's the refactored **GamePage.jsx**:

```js
import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';

const GamePage = (props) => {
  return (
    <div className="App">
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={props.colors}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
        <div className='App-controls'>
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer />
          <NewGameButton />
        </div>
      </div>
      <footer className='App-header-footer'>
        {(props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!')}
      </footer>
    </div>
  );

};

export default GamePage;
```

<img src="https://i.imgur.com/Ayx9Mlt.png">

Although the app is back to where it was, the classes defined in **App.css** are being used in **GamePage.jsx** which doesn't feel right. Refactoring the CSS will be part of the lab.

## The `Switch` Component

React Router includes a [`<Switch>`](https://reacttraining.com/react-router/web/api/Switch) component used to render the `<Route>` component that matches the URL.

It's quite common to wrap the `<Route>` components by a `<Switch>` component.

Let's take a look at the first example in the [docs](https://reacttraining.com/react-router/web/api/Switch) to see what `<Switch>` does.

Let's import it in **App.js**:

```js
import { Route, Switch } from 'react-router-dom';
```

Then use `<Switch>` to wrap the current `<Route>` in the `render` method:

```js
<header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
<Switch>
  <Route exact path='/' render={() =>
    <GamePage
      winTries={winTries}
      colors={colors}
      selColorIdx={this.state.selColorIdx}
      guesses={this.state.guesses}
      handleColorSelection={this.handleColorSelection}
      handleNewGameClick={this.handleNewGameClick}
      handlePegClick={this.handlePegClick}
      handleScoreClick={this.handleScoreClick}
    />
  } />
</Switch>
```

### Practice Exercise - Add a Route (15 min)

1. Create a `<SettingsPage>` component as a Function Component and be sure to follow the conventions for folders, etc.

2. Code `<SettingsPage>` so that it returns as its UI `<h1>Settings Page</h1>`.

3. Add a new `<Route>` below the `<Route>` for the `<GamePage>` component (but stay inside of the `</Switch>`).

4. The new route should have a path of `/settings` and should render the `<SettingsPage>` component.

5. The new `<Route>` component should pass its props to the function assigned to its `render` prop. The passed props should then be passed to `<SetttingsPage>` using the spread operator we saw in the _Using the `render` Prop on `<Route>`_ section above.

6. Browsing to `localhost:3000/settings` should result in this display:

	<img src="https://i.imgur.com/q3mVb4u.png">

7. Use React Developer Tools to verify that `<Route>` passed its props to `<SettingsPage>`:

	<img src="https://i.imgur.com/3AuJrAI.png">
	
Click the 🌶 when finished.

## Adding a `Link` to Change Routes

React Router comes with a [`<Link>`](https://reacttraining.com/react-router/web/api/Link) component that we must use instead of regular `<a>` tags to allow the user to click to go to different routes.

Using a regular `<a>` tag will result in a full-page refresh.

> There's also a [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) that makes it easy to add/remove styling based upon if the link's URL matches the current URL.

Since the lab is about implementing a Settings Page feature, let's add a `<Link>` to **GamePage.jsx** that you can use to move to that route.

First we need to import it:

```js
import { Link } from 'react-router-dom';
```

Now let's add the `<Link>` between the `<GameTimer>` and `<NewGameButton>`:

```js
<GameTimer />
<Link className='btn btn-default' to='/settings'>Difficulty</Link>
<NewGameButton />
```

The `to` prop specifies what URL path to route to if the link is clicked.

It looks good, except we need a little margin between the `<Link>` and `<NewGameButton>`.

**YOU DO: Take a few minutes to create and import a regular CSS file in `<GamePage>`, then add a `GamePage-link-margin` class with a `margin-bottom: 10px;` CSS property.  Finally, add that as an additional class to the `<Link>`.**

When completed, the page should look like this:

<img src="https://i.imgur.com/ScWtx2B.png">

### Practice Exercise - Add a Link (5 min)

1. Add a `<Link>` to `<SettingsPage>` above the `<h1>`.

2. The `<Link>` should display the text of "HOME" that when clicked navigates to `/` (root route):

	<img src="https://i.imgur.com/ZtXwjYz.png">

## Defining Routes with URL Parameters

Surely you remember routes we defined in Express and Django that included URL parameters similar to these...

In Express:

```js
router.get('/movies/:id', moviesCtrl.show);
```

and Django:

```python
path('movies/<int:id>/', views.movies_detail, name='movies_detail'),
```

We typically used such routes to view the show/details page for a single row/document in the database.

When you have similar functionality in a React app, we can define routes with named URL parameters like this:

```js
<Route path="/movies/:id" render={props => <Movie {...props}/>} />
```

As you can see, it uses the same `/:param` syntax that we used in Express.

#### Accessing the Values Corresponding to the URL's Parameters

The `match` prop passed by the `<Route>` components has a `params` property that's an object with a key:value pair for each URL parameter.

For example, assuming the route defined above:

```js
<Route path="/movies/:id" render={props => <Movie {...props}/>} />
```

Browsing to `localhost:3000/movies/123`, would result in the following `<Movie>` component:

```js
const Movie = ({match}) => (
  <h1>Movie id is: {match.params.id}</h1>
);
```

Renders this:

<h1>Movie id is: 123</h1>

> Note that `match` was assigned the the match prop via destructuring assignment in the parameter.

## Routing Programmatically

**Routing programmatically** is when you change routes in code vs. when a user clicks a link.

For example, a user just added a movie by clicking a button and you submitted the data via AJAX. Now what?

In a traditional web app, the server would have responded with a redirect to the index or details page.

That's not going to happen in a SPA. Instead, you've got to change route programmatically (using code) which is done using the `history` prop of the `<Route>` component:

```js
// Change to the root route programmatically
history.push('/');
```

Of course, you must ensure that `<Route>`'s `history` prop is passed to any component that needs to route programmatically.

## Summary

Using React Router to perform client-side routing is straightforward.

It's enormously flexible with the ability to declare routing for even the most complex of scenarios.

We'll see more of React Routers capabilities in the authentication lesson later in the week.

## Essential Questions

Take a moment to review the following questions:

1. **True or False: The `<Route>` component is _rendered_ when its `path` matches that of the URL's.**

2. **What's wrong with the following component?**

	```js
	const Movie = props => (
	  <div>
	    <a href="/movies">View All Movies</a>
	    <h1>{props.title}</h1>
	  </div>
	);
	```
	
3. **What prop provided by the `<Route>` component is used to access URL parameter values?**

4. **What prop provided by the `<Route>` component is used to access perform programmatic routing?**

## References

- [React Router - Web](https://reacttraining.com/react-router/web/guides/quick-start)







