# U-card

This app enables users to create a personal card with a name and tagline, with several in-built avatars available.

## App structure

### App
Contains the initial context state and checks the screen size.\
Responsible for rendering the correct components on screen, the right hand menu with suggested designs will only render on larger screens.

### Top Menu

Uses the cardDesignContext for the cardProperties state. Contains the options for:
- Background style
- Background color 1
- Background color 2

Will update the context when changes are made, using the handle functions contained in the component

### Left Menu

Uses the cardDesignContext for the cardProperties state. Contains the options for the:
- Layout
- Size
- Font
- Font Size
- Font Weight
- Font Color
- Avatar

Will update the context when changes are made, using the handle functions contained in the component.

### Bottom Menu

Uses the cardDesignContext for the cardProperties state. Contains the options for the:
- Border activation
- Border style
- Border width
- Border radius
- Border Color

Will update the context when changes are made, using the handle functions contained in the component.

### Right Menu

Currently uses the sample data to provide the props needed for the preview cards. Supplies the following props for the preview cards:
- key
- backgroundStyle
- backgroundColorOne
- backgroundColorTwo
- border
- borderRadius
- borderStyle
- borderWidth
- borderColor
- font
- fontSize
- fontColor
- fontWeight

Will update the card displayed and the context when changes are made, using the handle functions contained in the component.

### Context
The design choices made by a user are stored in the cardDesignContext, this is updated when any changes happen.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
