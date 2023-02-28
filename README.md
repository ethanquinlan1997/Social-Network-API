# Social-Network-API

## Description 
This application involes using API routes for a social networking application where users can create a friends list, share thoughts, and add reactions! 

## Table of Contents
​
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Links](#links)
* [Usage](#usage)
* [Packages](#packages)
* [Contributions](#contributions)
* [License](#license)

## User Story <a name="user-story"></a>
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria <a name="acceptance-criteria"></a>
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Links <a name="links"></a>
Video Demonstration: https://drive.google.com/file/d/14ahkqtWlQDIo03SSS9s0D4hJ-TRyMcYs/view

Github Repo: https://github.com/ethanquinlan1997

## Usage <a name="usage"></a>
To start, run the following command in your CLI - ```npm start```

## Packages <a name="packages"></a>
You will need to install express.js ```npm i express``` and mongooseDB ```npm i mongoose```

## Contributions <a name="contributions"></a>
More than welcome to any suggestions or comments. Feel free to open a comment for Pull Requests.

## License <a name="license"></a>

Copyright (c) 2012-2022 Ethan Quinlan.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
