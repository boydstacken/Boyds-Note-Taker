# Boyd's Note Taker

## Description

The motivation to for this application was to create an application that used to write and save notes using Express.js on the backend while accessing data from a JSON file.

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)

## Installation

Do a npm install in the terminal to get all the npm packages.

The index.js is already provided with the this application along with html and css. Adding to the server.js file packages like included to run this application (express, fs, uuid4, etc.). Can't forget to do an npm install for node modules as well. All essential to create your custom application. 

Record the walkthrough of the user prompts in node js, jest, and store the file link in the README.

## Usage

Install npm packages, add the server.js file include packages for application (express, fs, uuid4, etc). Import the necessary packages, create variables and set up the express server. 

Then start defining routes, handling the POST request to create a new note. When a POST request to /api/notes, the route is initiated and it retreived the 'db' object & creates a new object. The 'id' of thr new note is developed using uuidv4() function from the uuid package.

The req.body contains data sent with the request and is spread into the new note.  This new note is added to the savedNotes array and the updaeted array is written back to the db.json file. At last, the response contains the savedNotes array.

You should be able to click the "Get Started" button on the home page of the Note Taker application and that will bring you to the notes html page. On the left is where previous note titles and descriptions will be added. You should be able to add your title in the in the "title" field and add the description in the "note text" field. Then the save button icon will show in the upper right and if you click the note should post on the left side. if you clck the write icon at the top of the page you will see empty fields to enter ![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.].


## Credits

Boyd Stacken
Github Profile: https://github.com/boydstacken

## License

n/a

## Questions

If you have any questions about this Professional README Generator, please contact boydstacken@icloud.com with any futher inquiries.

