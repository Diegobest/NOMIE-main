# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### 'npm run dev'

For the backend server. Runs on port 3001. Change directory to backend. Check database connection from backend/database/connection.js. Set up a new connection locally using MySQL workbench as necessary. When ready to run the server, use command npm run dev.

### `npm start`

Change directory to frontend.
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### For future Devs - what to know and what needs work

This section will outline some known issues that will need correcting, as well as the next steps that will be necessary to bring the app closer to a production-ready state. Most of these issues are on the backend.

### Refresh tokens (backend)

The tokens.js file contains functions to create and send a JSON web token (jwt) access token that allows the user to access protected routes in the app (such as Member Home and Space Home) after signing in. This is only one basic level of authentication and it is highly recommmended to implement a refresh token that will allow the user continued access for an extended period of time, and which can be removed when the user logs out/signs out of the app.
Some code to create and send a refresh token has already been written in tokens.js but is commented out for the time being, as the first developers ran short of time and were not able to fully research/develop implementation of these tokens.
Refresh tokens are an important element for security and ease-of-use in any app and should be implemented in the next steps of development. Some sources suggest storing the refresh token in the database after it is created (not sure if this is strictly necessary...?) As well, the app will need some logout functionality that removes the refresh token so that it cannot be used maliciously by a party other than the user.

### Error handling when the user creates an account (frontend and backend)

The goal: the user should see an error message in the app if they create a duplicate account when signing up for Nomie.
How this could be implemented: Currently, the CreateAccount.js file has a function to submit the user's account data, insert this data into the database, and return an http status code. It should be possible to use the returned status code (e.g. 409, conflict) to set a variable in state that would allow conditional rendering (in other words, based on the http status, the user either sees the error message or sees no error and proceeds). The code has been written to make this possible, but has not yet been successful and will need troubleshooting. On the backend the route to post the data takes in a validateRegiter function that validates the user's input before proceeding with account creation. This function may also need troubleshooting.

If this is successful, similar error handling could be implemented in other pages, but this is not strictly necessary, and has not been written into the code of any other pages so far.

### The user creates their profile (frontend and backend)

The process for the user to create a profile involves nine pages: ProfileCreate.js, StepOne...StepSeven.js, and Final.js.

What needs work:
1) Currently, the questions tha are presented to the user are hard-coded, and optional questions are limited. In the final, production-ready version of the app, the group leader should have the ability to chose and set the questions the user will see.
This will require: most likely a group leader dashboard where they select the questions they want the user/group member to answer/pick from, an additional table in the database to hold all the optional questions, and dynamic coding in each Step to display the questions that have been set.

2) In the Final.js file, the request body (lines 17-22) contains variables that do not fit neatly into the profile table in the db (e.g. Comments, Topic). Compare these with the profile table columns in MySQL_Scripts.sql. Another issue: some columns that have a NOT NULL attribute are currently not receiving input from the request body (but of course they should).
This will require: either altering/redefining the profile table, or changing the request body to include data for each column in the table as it is defined.

3) The Final.js file can present a <div> displaying an error message to the user if the submitFormData function (line 13) returns a !ok status (ie not 200-299). This would be similar to the error handling for CreateAccount.js mentioned above. This is an entirely optional feature.
This would require: additional lines of code in the submitFormData function that checks the response.status and sets some variable in state that would enable conditional rendering - see CreateAccount.js for an example.

### Forgot password and terms & conditions (frontend)
On the CreateAccount page and the Signin page, the user should be able to follow links to view terms and conditions, or to reset a forgotten password, but none of this has been created yet.

### console.log (throughout)
We have inserted console.log throughout the code, to aid in our own troubleshooting. We leave these lines of code to assist you during your iteration, but feel free to delete them as/when necessary.