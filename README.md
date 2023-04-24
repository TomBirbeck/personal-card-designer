# Table of Contents

- [Overview](#u-card)
- [AppStructure](#app-structure)
- [App](#app)
- [Top Menu](#top-menu)
- [Left Menu](#left-menu)
- [Bottom Menu](#bottom-menu)
- [Right Menu](#right-menu)
- [Card Container](#card-container)
- [Card](#card)
- [Context](#context)
- [Types](#types)
- [Installation](#using-this-codebase)
- [Scripts](#available-scripts)

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

### Card Container

Contains states to store the name and tagline of the user, gets cardProperties from the cardDesignContext, and has a cardRef to be used when a user wants to download their card. \
This component is responsible for rendering the Card component and the save and download buttons.\
When a user clicks to download the card design will be drawn onto a html canvas and downloaded to their device.\
Card container passes down the following props to the Card component.
- name
- tagline
- cardRef

### Card

This component tkes in the props of name, tagline and cardRef.\
It creates Props using the cardDesignContext and then deconstructs this to get the states needed for each design variable.\
It has two useEffects that run when the state changes. The first one checks whether or not the border is active and one which checks which background style hs been chosen by the user. This information then determines how the card is rendered on the screen.\
The component uses conditional rendering to and inline CSS to display the correct card design.

### Context
The design choices made by a user are stored in the cardDesignContext, this is updated when any changes happen.

### Types

This file contains the different types required in the components throughout the app. 

## Using this codebase

To use or adapt this code yourself you will need to clone the repositiory and then run nmp i in your terminal to install the dependencies.

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
