# Feed Reader Testing
The aim of this project is to use [Jasmine](http://jasmine.github.io/) to test the functionality of a pre-existing feed reader application.  This project is part of the Udacity Nanodegree program, and all code outside of the `jasmine/feedreader.js` file was provided as a template for this project.


**The following criteria must be met:**

* The required tests for the project (RSS Feed testing, RSS Feed properties, menu default state, and menu hiding/showing) are all provided and are comprehensive enough to adequately test the functionality
* Tests should be independent of one another
* All required tests for the project pass
* A `README` file is included detailing all steps required to successfully run the application
* Comments are present and effectively explain longer code procedures
* Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

## Technologies used

All tests have been written in Jasmine using JavaScript, and the feedreader application itself uses HTML, CSS, and jQuery.

## Running the tests

1. Download the repository and unzip it
2. Open `index.html` in the root folder
3. The tests will automatically run, and the results can be seen at the bottom of the page

_Please note: As the feeds are fetched asynchronously, you may have to wait a few seconds for each of the feeds to fetched, and the tests completed._

All tests are completed when the message "finished in x seconds" is displayed in the top right of the Jasmine window near the bottom of the page.  A successful test will be represented by a green dot below the Jasmine logo, while a failed test will instead display a red cross.  Details of any failed tests can be seen at the bottom of this window.

## More about Jasmine

For more information about Jasmine, please check out the [Official Jasmine Documentation](https://jasmine.github.io/).
