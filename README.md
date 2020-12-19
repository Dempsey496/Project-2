# Project-2

## Description

This application is a four page responsive codebase created to provide an accessible and centralized location for users to create, update, delete and view their own Christmas lists or lists of other users. This site can be used to store their own customized Christmas list and populate it with their gift ideas. Cyber Santa is a full-stack application that lets it's users get a little festive while planning their shopping.

***

## Table of Contents

1. [Acceptance Criteria](#crit)
2. [Deployed Site Link](#link) 
3. [Screenshots](#scrshot)
4. [New Technology Used](#newtech)
5. [File Structure](#filestruc)
6. [All Technology Used](#tech)
7. [License](#lice)

***

<a name="crit"></a>

## Acceptance Criteria 

```
Must use a Node and Express web server

Must be backed by a MySQL database with a Sequelize ORM

Must have CRUD routes for at least one model

Must be deployed using Heroku (with data)

Must utilize at least one new library, package, or technology that we haven't discussed in class

Must have a polished front end/User Interface (Not Bootstrap)

Must have a folder structure that meets the MVC paradigm

Must use Handlebars for server-side templating

Must meet good-quality coding standards (indentation, scoping, naming, etc...)

Must protect API keys in Node with enviroment variables
```
***

<a name="link"></a>

## Deployed site link

Cyber Santa link: https://project-2-cyber-santa.herokuapp.com/

***

<a name="scrshot"></a>

## Screenshots

![Home Page](/public/assets/images/Screenshot2020-12-19042506.png)

***
![View Lists Page](/public/assets/images/Screenshot2020-12-19042329.png)

***
![Create Gifts Page](/public/assets/images/Screenshot2020-12-19042234.png)

***
<a name="newtech"></a>

## New Technology Used - ESLint

For this project we chose ESLint as our new tech. This tool will not only recognize patterns in our code, but it will also return warning or errors after recognition. In order to prevent group colaborations from having several different doc formats, ESLint can be customized to put up flags it the coder is using a non-prefered or bad-quality coding standard.  

***

<a name="filestruc"></a>

## Folder and File Structure

```
Project 2
│
├── config                   
│   └── config.json                       
│          
├── controllers 
│   └── cyberSantaController.js             
│
├── db 
│   └── schema.sql
│
├── models                              ## node_modules, .gitignore, 
│   ├── gift.js                         ## package-lock.json, and package.json 
│   ├── index.js                        ## are all not included
│   └── list.js  
│
├── public/assets 
│   ├── js
│   │   └── lists.js 
│   ├── style
│   │   └── style.css 
│   └── images 
│
├── views 
│   ├── layouts 
│   │   └── main.handlebars 
│   ├── create-list.handlebars
│   ├── index.handlebars
│   ├── lists.handlebars
│   └── single-list.handlebars
│    
├── README.md
│
└── server.js                 
 
```
***

<a name="tech"></a>

## Technologies Used

* HTML (using Handlebars)
* JavaScript
* CSS 
* jQuery
* MySQL
* Sequelize
* Materialize Framework
* ESLint
* Heroku
    * JAWS_DB Addon
* Node.Js
   * Express
   * Handlebars, Express-Handlebars
   * Data parsing middleware

***

<a name="lice"></a>

## MIT License

Copyright (c) 2020 Group Plutonium

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
