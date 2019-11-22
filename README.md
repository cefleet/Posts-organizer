## `Post Organizer`
This is a test project to organize post organizer
---
#### `Timelog:`
11/21/2019

* 2:10pm - Launched create react app.
* 2:15pm - removed boilerplate code and installed recux and testing dependecies.
* 2:20pm - All of my boilerplate stuff is pulled in (useFetch premade for another project is being reused) and setting up the simpe store for redux.
* 2:25pm - Data is being pulled in via the useFetch Hook. App.js has rendering for Loading and Error from the useFetch Hook.
* 2:30pm - Post component is created.
* 2:40pm - The posts are seperated into two divs and display with default styling.
* 3:00pm - the styling is completed.
* 3:15pm - Posts Unit Test are written and pass.
* 3:40pm - Refactored Apps to Have a Postgroup so it is possible (with my knowldge) to do unit testing.

***Note to self. Learn how to do unit testing with the Hooks...I will not have good coverage.***

* 4:00pm - did all of the unit test I am able to do without understanding how UT works with hooks. SMDH.
* 4:10pm - fixed afew other gramatical errors.
* 4:20pm - finished pushing up an updated readme to github, created a build version.
* 4:25pm - created published version for viewing at "http://post-organizer.s3-website-us-east-1.amazonaws.com/"
* 4:25pm - zipped a version without node_modules

11/22/2019

* 7:30am - started refactoring to make better useage of redux.
* 7:42am - implemented the better usage. Start working on the new unit tests.
* 8:02am - pushed up what I had done to github in a new branch called broken "unitTestBroken"
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

