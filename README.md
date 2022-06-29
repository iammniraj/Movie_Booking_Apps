# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

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

Checkpoint 1
Creating the React Application
Introduction: From this checkpoint onwards, you will start building the frontend for the Movie Booking application. As part of this checkpoint, you need to create the project structure for your application using 'create-react-app' and push it to GitHub.

TODOs:

TODO 1.1: React Project Creation

Refer to React Codebase Set-Up in the Additional Resources to set up your environment to create and run a React application.
Install the CLI tool create-react-app by typing 'npm i -g create-react-app'.

Create your React application by using the 'create-react-app' package, by typing 'create-react-app movies-app'. This command will then create a folder with the name that you mentioned in your current path in the ‘Command Prompt’. This folder will consist of all the necessary configuration files that you need as the starter code for a React application.

Go to the newly created folder and run the application using the command 'npm start'. This will start a development server running on 'localhost:3000'.

TODO 1.2: Code Cleanup and Folder Structure

Go to the index.html file and change the title from ‘React App’ to ‘Movie Booking App’.

Inside the src folder, delete the App.js, App.css and logo.svg files and in the index.js file, delete the App tag, leaving empty divs in the render() method.

Inside the src folder, create a new folder named ‘assets’. This folder will consist of all the resources that are to be used in the application.

Inside the src folder, create a new folder named ‘common’. This folder will consist of all the common files (components, stylesheets, scripts, etc.) that are needed for the application.

Inside the src folder, create a new folder named ‘screens’. This folder will consist of all the components corresponding to different screens (or pages) in the application.

You need to make sure to adhere to these guidelines for folder structure whenever you make any change:

Always keep these folders and the corresponding files inside the root directory of your application:

'node_modules’ folder (containing the list of all the packages)

'public’ folder

‘index.html’ file

‘manifest.json’ file

‘src’ folder

‘assets’ folder

‘common’ folder

‘screens’ folder

‘index.css’ file

‘index.js’ file

‘.gitignore’ file

‘package-lock.json’ file

‘package.json’ file

‘README.md’ file

Remember to not disturb the names of these folders and files and their locations inside the application. If you do, then it would be cumbersome for the graders to evaluate your code based on the given rubrics. Also, take special care to change only the required content of these folders and files. If you fail to do so, then your application may fail to run successfully, and this would also lead to your application being evaluated incorrectly.

Place all the common elements, components, stylesheets, scripts, etc. inside the ‘common’ folder.

Place all the resource files that you need to use in the application inside the ‘assets’ folder.

Create all your pages (called screens) inside the ‘screens’ folder. For each page, you need to first create a folder by the name of that page. Inside this folder, you need to create one JavaScript file and one stylesheet corresponding to that page.

For example, if you are creating the home page, then you can create a folder named ‘home’ inside the ‘screens’ folder. Inside this folder, you can create two files, ‘Home.js’ and ‘Home.css’, which are, respectively, the JavaScript and stylesheet files corresponding to the home page of the application:

‘screens’ folder

‘home’ folder

‘Home.js’ file

'Home.css’ file

TODO 1.3: Creation of a GitHub Repository for the Project

Create a public GitHub repository for the Movie Booking application project by using your GitHub account.
The project is automatically under Git due to the internal working of create-react-app, commit the current state of the project with the message ‘first commit’ and push the project to GitHub.

Note: Ensure to commit the project and push it to GitHub whenever you complete a checkpoint or a feature with an appropriate commit message. This will be considered while grading your project, and there will be penalties for not having incremental commits with appropriate commit messages.
