# Facial Recognition
This simple project is a demonstration. The aim is to enter an image and have the app recognise the positions of any faces in the image, if any. It was tested with urls of online images, and was built using [Create React App](https://github.com/facebook/create-react-app). The app is responsive and makes use of the [Clarifai facial recognition API](https://www.clarifai.com/) which requires an API key. This repository forms the front-end built as a React app, and a backend server. The server software is at [this repository](https://github.com/DevDaveJ/facerecog-svr), and it handles connecting to Clarifai and recording each time a user submits an image for facial detection. For this reason it also connects to a Postgres database.

## Demo

The best way to experiment is by registering as a new user (You do *NOT* have to enter a real email address!! This is a demo project for illustrative purposes). You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button. The number of face detections a user performs is recorded and stored. 

which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

## Demo

The best way to experiment is by registering as a new user (You do *NOT* have to enter a real email address!! This is a demo project for illustrative purposes). You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button. The number of face detections a user performs is recorded and stored. 

### Watch this [demo video](https://share.getcloudapp.com/nOu5xqOp). Enjoy!

## Usage

After starting the app by running `npm start`, click on the Sign-In button. You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button.

## Stack
* Debian 10 on Google Cloud instance
* nginx stack
* postgresql database - to store users details with a hashed key
* reactjs (Frontend)
* nodejs express server (Backend)
* react-router

The backend is in an associated project (facerecog-svr) and requires an api key from Clarifai to function. Both frontend and backend make use of environment files.
