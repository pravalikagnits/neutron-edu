# Maps Search

This React application uses the public [Maps REST API](http://platform.geo.apple.com/maps-rest-api/index.html) for location-based searches (e.g., Indian restaurants near San Francisco). Clicking on a search result opens the Maps app and drops a pin.

Try creating this application by starting from the template application, and referencing this repository if you get stuck.

### Architecture

This [Search](./src/Search.js) component stores the input value in its internal state, which is updated on every keystroke. When the user hits the Enter key or clicks the search button, the value is sent to the parent component ([App](./src/App.js)) via the `onSearch` callback property. This avoids querying the Maps api with every keystroke.

The [App](./src/App.js) component queries the Maps api when the `onSearch` callback is invoked. We set `searching` to true in the `App` state when a network request is pending. This allows us to block the UI and display a spinner in the `Search` component.

The [List](./src/List.js) and [Item](./src/Item.js) components display the search results.

### Review

* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Challenges

* Next to the search button, add a button that clears the search value.
* Only invoke the `onSearch` callback when the value has changed.
* When the input control is focused, select all the text.
* Allow the user to mark a search result item as a favorite, and view all favorites. Allow removing favorites. Consider using `localStorage` to persist the favorites.
* Display previous searches when the input control is empty. Clicking on a previous search executes that search.
