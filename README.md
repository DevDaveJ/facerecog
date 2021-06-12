# Facial Recognition
This simple project was part of the [Andrei Negoie Complete Web Developer course](https://www.udemy.com/share/101WcUAEYYd1ZWTX4=/) on udemy. The aim of the project was to enter an image and have the app recognise the positions of any faces in the image, if any. It was tested with urls of online images, and was built using [Create React App](https://github.com/facebook/create-react-app). The app is responsive and makes use of the [Clarifai facial recognition API](https://www.clarifai.com/).

## Demo

The best way to experiment is by registering as new user (You do *not* have to enter a real email address!). You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button. The number of face detections a user performs is recorded and stored. Watch this [demo video](https://share.getcloudapp.com/P8u9b8B6). Enjoy!

## Stack
Project is deployed on:
* nginx stack - reverse proxying to nodejs express

and it uses the following tech stack:
* postgresql database - to store users details with a hashed key
* reactjs (Frontend)
* nodejs express server (Backend)
* react-router

The backend is in an associated project (facerecog-svr) and requires an api key from Clarifai to function. Both frontend and backend make use of environment files.
