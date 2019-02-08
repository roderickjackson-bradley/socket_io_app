
[click here to view as a presentation](https://presentations.generalassemb.ly/c63f361750c87316f510056674b7d7a3#/1)

<style style="visibility:hidden"> .reveal li {font-size: 32px;} .reveal ul ul li, .reveal ul ol li, .reveal ol ol li, .reveal ol ul li { font-size: 28px; } </style>

---

<img src="https://i.imgur.com/cD5R8OG.png" width="600px;display:inline-block;margin:auto">

<br>

### Mongoose<br>Embedding Related Data

---

## Learning Objectives
<br>

- Students Will Be Able To:

	- Use EJS Partial views
	- Define schemas for embedding Subdocuments
	- Embed a Subdocument in its related document


---

## Roadmap
<br>

1. Setup
1. Review the Starter Code
1. Related Data Entities - Review
1. Embedding Subdocuments
1. Adding Reviews to a Movie
1. Essential Questions
1. Further Study
	- Retrieve a Subdocument from a Mongoose Array
	- Remove a Subdocument from a Mongoose Array
	- Query for a Document that Contains a Certain Subdocument

---
#### Setup
<br>

- `cd` to `starter-code/mongoose-movies` folder within this lesson's folder in the class repo.

- Install the node modules:

	```
	$ npm install
	```
	
- Open the **`mongoose-movies`** folder in your code editor.

- Use `nodemon` to start the server.

---
#### Review the Starter Code
<br>

- As you can see, a navigation bar and a bit of styling has been added since yesterday.

- However, the changes are more than skin deep...

---
#### Review the Starter Code
<br>

- **EJS Partial Templates** have been implemented! Check out how:
	- **movies/index.ejs** & **movies/new.ejs** are using EJS's `include` function to _include_ header and footer "partial" templates.
	- Check [these docs](https://www.npmjs.com/package/ejs#includes) for more info.
	- All `res.render()` calls are passing in a `title` property that's being used for the page title and to dynamically add an `active` class to the links in the nav bar.

---
#### Review the Starter Code
<br>

- The **show** route/action for viewing a single movie has been implemented:
	- **views/index.ejs** shows a "DETAILS" link that will send a request to the proper `show` route: `GET /movies/:id`.
	- EJS tags write the movie's `_id` into the `href` attribute.
	- The `moviesCtrl.show` action is using `Movie.findById` method to retrieve the movie doc with an id of `req.params.id`.

---
#### Related Data Entities - Review
<br>

- As you may recall, **relationships** exist between **entities**.

- For example, in the _Mongoose Movies_ app, we might have the following entity relationships:

	- **_A Movie has many Reviews; A Review belongs to a Movie_**
	<br>**`Movie --< Review`** (One-To-Many)
	
	- **_A Movie has many Performers; A Performer has many Movies_**
	<br>**`Movie >--< Performer`** (Many-To-Many)

---
#### Adding Movie Reviews
<br>

- **_A Movie has many Reviews_**

- In a SQL Database, how we model data for an application is usually obvious - there isn't much flexibility, for example, there would **have** to be a `Review` model that maps to a _reviews_ table.

- However, modeling data in MongoDB/Mongoose is more flexible, less strict, and  left up to the developer to decide,<br>and<br>those decisions should be based on how best to implement the features of an application...

---
#### Adding Movie Reviews
<br>

- In most apps, a related entity, such as _reviews_, would likely be displayed with its parent being reviewed, in this case a _movie_.

- If we stored _reviews_ in their own collection using a `Review` Model, we would have to make a separate queries to access the _reviews_ for the movies - not very efficient.

- Therefore, in MongoDB/Mongoose, **_reviews_** are a perfect use case for embedding related data.

---
#### Embedding Subdocuments
<br>

- Subdocuments are very similar to regular documents.

- The difference being that they themselves are not saved directly - they are saved when the document they are embedded within is saved.

- Subdocuments do have their own **schema** though.

- However, since subdocs are not saved to a collection, we **do not compile a subdoc's schema into a Model**.

---
#### Creating a Schema for a Subdocument

- If a schema is going to be used for embedding subdocs in just **one** Model, then there's no reason to put the schema in its own module.

- In our case, it's okay to write the `reviewSchema` just above the `movieSchema` in **models/movie.js**:

	```js
	var reviewSchema = new Schema({
	  content: String,
	  rating: {type: Number, min: 1, max: 5, default: 5}
	}, {
	  timestamps: true
	});
	
	var movieSchema = new Schema({
	```

---
#### Creating a Schema for a Subdocument
<br>

- With `reviewSchema` defined, we can now use it within the `movieSchema` as follows:

	```js
	var movieSchema = new Schema({
	  ...
	  nowShowing: { type: Boolean, default: false },
	  // reviews is an array of review subdocs!
	  reviews: [reviewSchema]
	}, {
	  timestamps: true
	});
	```

- We're now ready for the  _User Story_...

---
#### Adding Movie Reviews - Step 1
<br>

- **_AAU, I want to add a review for a movie that includes a rating_**

- Step 1 is to determine the proper route.

- Routing for a related, also called a nested, resource is slightly different.  Take a look [here](https://gist.github.com/jim-clark/d7e5c9130c9b46b253d4c47aa601596a).

---
#### Adding Movie Reviews - Step 1
<br>

- Using the chart, the proper route for creating a _review_ is:

	```sh
	POST /movies/:id/reviews
	```

- Importantly, the route provides to the server the `_id` of the _movie_ that the _review_ is being created for.

---
#### Adding Movie Reviews - Step 2
<br>

- Step 2 calls for creating the UI - in this case, we need a form to submit the review to the server.

- A nested resource like comments or reviews, usually has its form on the **show** view of its parent - you _could_ have a dedicated view, but not today.

- Open up **movies/show.ejs**...

---
#### Adding Movie Reviews - Step 2

- We won't worry about styling during the lesson, so here's the ugly form to add under the current `<table>`:

	```html
	</table>
	<!-- new markup below -->
	<h2>Reviews</h2>
	<form id="review-form" method="POST"
	  action="/movies/<%= movie._id %>/reviews">
	  <label>Review:</label>
	  <textarea name="content"></textarea>
	  <select name="rating">
	    <option value="1">1</option>
	    <option value="2">2</option>
	    <option value="3">3</option>
	    <option value="4">4</option>
	    <option value="5">5</option>
	  </select>
	  <input type="submit" value="Add Review">
	</form>
	```

---
#### Adding Movie Reviews - Step 3
<br>

- Browse to the "details" of a movie.

- I warned you it would be ugly, but the form's `action` attribute looks pretty sweet!

- Step 3 calls for defining the route on the server...

---
#### Adding Movie Reviews - Step 3
<br>

- To achieve max flexibility for CUD'ing the _reviews_ resource, let's define dedicated **route** module:

	```sh
	$ touch routes/reviews.js
	```
	
	and a **controller** module too:
	
	```sh
	$ touch controllers/reviews.js
	```

---
#### Adding Movie Reviews
<br>

- Now let's require the new router in **server.js**:

	```js
	var moviesRouter = require('./routes/movies');
	// new reviews router
	var reviewsRouter = require('./routes/reviews');
	```
	and mount it like this:
	
	```js
	app.use('/movies', moviesRouter);
	// mount the reviews router
	app.use('/', reviewsRouter);
	```

- Note that for flexibility we will mount to root in _server.js_

---
#### Adding Movie Reviews - Step 3
<br>

- Let's require the usual at the top of the router module and add our first route in **routes/reviews.js**:

	```js
	var express = require('express');
	var router = express.Router();
	var reviewsCtrl = require('../controllers/reviews');
	
	router.post('/movies/:id/reviews', reviewsCtrl.create);
	
	module.exports = router;
	```

- The server won't be happy until we create and export that `create` action...

---
#### Adding Movie Reviews - Step 4
<br>

- Step 4 says to code and export the controller action.

- Let's go to the new **controllers/reviews.js**:

	```js
	var Movie = require('../models/movie');
	
	module.exports = {
	  create
	};
	```
	
- Above we are requiring the `Movie` model because we will need it to access the _movie_ document to add a review to.

- Let's write the `create` function next...

---
#### Adding Movie Reviews - Step 4
<br>

- Here's the `create` function used to add a _review_ to a _movie_:
	
	```js
	function create(req, res) {
	  Movie.findById(req.params.id, function(err, movie) {
	    movie.reviews.push(req.body);
	    movie.save(function(err) {
	      res.redirect(`/movies/${movie._id}`);
	    });
	  });
	}
	```

- As you can see, we simply push in an object that's compatible with the embedded document's schema, call `save` on the parent doc, and redirect to wherever makes sense for the app.

---
#### Adding Movie Reviews - Update **show.ejs**
<br>

- All that's left is to update **movies/show.ejs** to render the _reviews_.  Time permitting, let's type it in, otherwise we can copy/paste then review.

- It's a bit large, next slide please...

---

```html
<% if (movie.reviews.length) { %>
  <table>
    <thead>
      <tr>
      	 <th>Date</th>
        <th>Review</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <% movie.reviews.forEach(function(r) { %>
        <tr>
          <td><%= r.createdAt.toLocaleDateString() %></td>
          <td><%= r.content %></td>
          <td><%= r.rating %></td>
        </tr>
      <% }); %>
    </tbody>
  </table>
<% } else { %>
  <h5>No Reviews Yet</h5>
<% } %>
```

---
#### Adding Movie Reviews 
<br>

- Assuming no typos, you should be able to add reviews!

- Let's wrap up with some essential questions before you start on the lab to practice this stuff!

- Oh, when you get a chance, be sure to check out the<br>_Further Study_ section which shows you how to:
	- Retrieve a subdocument embedded in a Mongoose array
	- Remove a subdocument from a Mongoose array, and
	- Query for a document that contains a certain subdocument!

---
### Essential Questions
<br>

<p>Take a couple of minutes to review...</p>

- **True or False: All schemas must be compiled into a Model.**

- **Is it more efficient to embed or reference related data?**

- **True or False: An embedded subdocument must have its `save` method called to be persisted to the database.**

---
### Further Study

---
#### Retrieve a Subdocument from a Mongoose Array
<br>

- Mongoose arrays have an `id` method used to find a subdocument based on the subdoc's `_id`:

	```js
	var reviewDoc = movieDoc.reviews.id('5c5ce1be03563ad5540e93e2');
	```

- Again, the string argument represents the `_id` of the review subdoc.

---
#### Remove a Subdocument from a Mongoose Array
<br>

- Subdocuments have a `remove` method used to remove them from the array:

	```js
	// remove the first review subdoc
	movieDoc.reviews[0].remove();
	```

---
#### Query for a Document that Contains a Certain Subdocument

- There's an amazing syntax that you can use to query documents based upon the properties of subdocs.

- Let's say you wanted to find all movies with a 5 rating:

	```js
	Movie.find({'reviews.rating': 5}, function(err, movies) {
		console.log(movies);  // wow!
	});
	```
- Wow! `reviews.rating` represents the array and a property on the subdocs within that array!

- Note that the **dot** property syntax must be enclosed in quotes.

---

# References
<br>

- [MongooseJS Docs - Subdocuments](https://mongoosejs.com/docs/subdocs.html)


