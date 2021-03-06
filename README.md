

# [Better Earth](https://sheltered-sea-24671.herokuapp.com/)


[![GitHub License](https://img.shields.io/badge/License-orange.svg)](Develop/License/MIT.md)
<!-- [![GitHub Test](https://img.shields.io/badge/Test-blue.svg)](#test) -->
<!-- can put technologies here as shield icons and their versions -->



## Description 

Better Earth is a full-stack application that allows the user to find eco-firendly alternatives to everyday consumer products.

Some additional features of the project are a news and footprint history sections. This project enabled us learn about react and routing within react.

## Table of Contents

* [Description](#Description)
* [Technologies](#technologies)
* [Application](#Application)
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Instructions](#instructions)
* [Acknowledgements](#acknowledgements)
* [Questions](#questions)

## Technologies

* JavaScript
* Bootstrap
* [Web app manifests](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
* [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)
* [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* Node.js
* npm
* HTML
* CSS
* [MongoDB](https://docs.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* Heroku
* Express 
* React Materliaze

## Application 

![Finished Product](./finishedApp.png)

## Demonstration 

### About Us
![Application Gif](https://media.giphy.com/media/S98UevhF3irXh5Hadv/giphy.gif)

### About Us
<!-- ![Application Demo](./public/assets/video.gif) -->


## Installation

The following installations are needed for this package:
1. npm init 
2. npm i  
3. npm install node
    
Once in the correct directory (server.js), run "npm start"

Deployment Instructions
1. git add .
2. git commit -m "a commit message"
3. git push heroku master
4. heroku open

## Instructions

These are instructins & tips for anyone who wants to build this app or a similar app as practice:

* Using MongoDB

1. Make sure to start MongoDB in your terminal prior to running the application

* Using Web app manifests

Web app manifests are part of a collection of web technologies called progressive web apps (PWAs), which are websites that can be installed to a device’s homescreen without an app store. Unlike regular web apps with simple homescreen links or bookmarks, PWAs can be downloaded in advance and can work offline, as well as use regular Web APIs.
The web app manifest provides information about a web application in a JSON text file, necessary for the web app to be downloaded and be presented to the user similarly to a native app.

1. Create a manifest.webmanifest in a public folder and populate it with information about your images 
2. Add a link to index.html (<link rel="manifest" href="manifest.webmanifest">)
3. If you have seed data run the following, npm init > npm run seed > npm start

* Using Service Worker

A service worker (similar to AppCache) is a script that your broswer runs in the background, separate from a web page, and allows for a user to use their application offline. 

1. Create a service-worker.js file in the public folder.
2. Copy and analyze the code I have in my service-worker.js file


* Using IndexedDB

IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. 

1. Create a db.js file in the public folder
2. Copy and analyze the code I have in my db.js file 


## Team Members
* Armenuhi Avanesyan
* Jeffrey Adamo
* Vinh Mao
* Tyler McBride


## Acknowledgements

* UW Coding Bootcamp instructional team and classmates
    * test files already provided
    * skeleton of html files already provided
    * htmlRenderer.js already provided



## Questions 

If you have any questions, please contact me on:
GitHub at [avaarm](https://github.com/avaarm)
Email at [Armenuhi](mailto:avaarm95@mail.com)