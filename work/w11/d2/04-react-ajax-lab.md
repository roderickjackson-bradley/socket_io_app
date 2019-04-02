<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React Lab

---

## Intro

In the lesson earlier you:

1. Learned to consume a third-party API in React from the `componentDidMount` lifecycle method.
 
2. Created a "service" module to organize `fetch` calls within.

In this lab, you'll consume the [Star Wars API](https://swapi.co/) and render it's data.

**This lab is a DELIVERABLE**

## Set Up

To get set up for this lesson:

- `cd` into this lab's folder.
- Use `create-react-app` to create a React app named `react-blogs`
- `cd` into `react-blogs` and open VS Code.
- Open a terminal in VS Code.
- Start the React Dev Server.

## Exercises

> Styling in this lab is secondary to completing the functionality

1. Research documentation of [SWAPI](https://swapi.co/documentation) to find the endpoint for the `starships` resource.

2. Create a `services/sw-api.js` service module and ensure that all API/fetch calls are made from this module. Use named exports to expose AJAX functionality as needed, e.g., to obtain all starships.

3. Obtain all of the starships from the API and render in `<App>` a clickable `<Link>` (imported from `react-router-dom`) for each starship. The link should be styled to look like a button and contain the text of the starship's name.

4. When a starship `<Link>` is clicked a `<Starship>` component should be rendered that includes the starship's `name`, `model` and a "Return to Starship List" `<Link>` that routes back to the root route that renders `<App>`.

## Hints

- Hold the starships in state and expose them individually via a method that can be passed down via a prop. The method should accept an argument that can be used to identify which starship to return to the caller (`<Starship>`).

- Review the Client-side Routing in React lesson's _Defining Routes with URL Parameters_ section for assistance with how to define routes with parameters used to pass information to components.

## Deliverable

Commit your code and slack the link to this lab in your repo.

## Bonus

- Enhance the `<Starship>` component to render a list of the names of the pilots for that starship.

- If the starship has no pilots, display a "No Pilots" message.

	Hint: This requires a call to the API for each of the endpoints listed in the starship's `pilots` array. Using `async`/`await` can help with this - [here's a repl](https://repl.it/@jim_clark/Multiple-AJAX-Calls) that shows how to fetch the pilots in parallel.
