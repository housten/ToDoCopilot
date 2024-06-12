![Solidify logo](docs/images/solidify.svg)

# Copilot Workshop - CI/CD with React TODO App

This is a template application, featuring a simple react app with some tests. This can be used as a starting point for showcasing Copilot features on an existing repository.

After creating a copy of this template you need to set up a couple of things
- Enable GitHub Pages. It should be coming from Actions
- Change the homepage url in the `package.json` file to match the owner and repository names

We have created some scenarios that you can go through to explore the gh copilot features

- [Set up branch protection rules](./docs/01-Setting-Up-Branch-Protection-Rules.md)
- [Setting up Testing in CI](./docs/02-Setting-Up-Tests.md)
- [Modyfying Current Deployment Pipeline](./docs/03-Modifying-Deployment-Pipeline.md)

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

