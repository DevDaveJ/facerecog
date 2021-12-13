# Facial Recognition
This simple project is a concept demonstration. The aim is to enter an image and have the app detect any faces in the image, if any. It was tested with urls of online images, and was built using [Create React App](https://github.com/facebook/create-react-app). The app is responsive and makes use of the [Clarifai machine-learning API](https://www.clarifai.com/models/ai-face-detection). This repository forms the front-end built as a React app, and requires a backend server. The server software is at [this repository](https://github.com/DevDaveJ/facerecog-svr), and it handles connecting to Clarifai and recording each time a user submits an image for facial detection. 

## Stack (front & back ends)
* Debian 10 on Google Cloud instance
* nginx stack
* postgresql database 
* reactjs (Frontend)
* nodejs express server (Backend)
* react-router
* Clarifai RESTful API

The [backend](https://github.com/DevDaveJ/facerecog-svr) requires an api key from Clarifai to function.

## Usage
The app is available [here](https://face.stonetech.io). The initial screen presented is a signin, where you can create a (test) user (You do *NOT* have to enter a real email address!! This is a demo project to illustrate secure signin, amoung other things). OR, you can use "john@mail.com" / "cookies" as a login.You will then be presented with a field to enter the URL of an image. Image is loaded on pasting the url. Attempt to recognise faces takes place on clicking the 'Detect' button.
These steps are demonstrated in this short video clip here:
### Watch this [demo video](https://share.getcloudapp.com/nOu5xqOp). 

Enjoy!
