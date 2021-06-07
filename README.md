# Facial Recognition
This simple project was part of the [Zero to Mastery Complete Web Developer](https://www.udemy.com/share/101WcUAEYYd1ZWTX4=/) course on udemy. The aim of the project was to enter an image and have the app recognise the positions of any faces in the image, if any. It was tested with urls of online images, and was built using [Create React App](https://github.com/facebook/create-react-app). The app is responsive and makes use of the [Clarifai facial recognition API](https://www.clarifai.com/).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage

After starting the app by running `npm start`, click on the Sign-In button. You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button.

## Stack
Project is deployed in two places:
* nginx stack - reverse proxying to nodejs express
* heroku Server

and it uses the following tech stack:
* postgresql database - to store users details with a hashed key
* reactjs (Frontend)
* nodejs express server (Backend)
* react-router
