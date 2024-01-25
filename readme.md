# QuoteAPI CodeCademy Challenge
#### **Project by Jason Newman aka TheObstinatePanda**
-------

## Description
This project was the first challenge project in CodeCademy's Back-End portion of their Full-Stack course. It focuses on the base elements of API creation including CRUD methodology utilizing Express.js.

Utilizing Get, Put, Post, this app pulls quotes from the ``data.js`` file randomly, by author, or all at once. It also enables users to enter their own quotes which are added to the list of quotes from the file (there is not yet functionality to save those additions).

## Installation
To install this project, follow these steps
1. Clone this repository (https://github.com/TheObstinatePanda/QuoteAPI.git)
2. Run `npm install` to install dependencies
    * "bytes": "3.1.0",
    * "content-type": "~1.0.4",
    * "debug": "2.6.9",
    * "depd": "~1.1.2",
    * "http-errors": "1.7.2",
    * "iconv-lite": "0.4.24",
    * "on-finished": "~2.3.0",
    * "qs": "6.7.0",
    * "raw-body": "2.4.0",
    * "type-is": "~1.6.17"
## Usage
To start the server input `node server.js` to start the server on port 4001.
## API Enpoints
- `GET /api/quotes/random`: Returns a random quote
- `GET /api/quotes/` : Returns a list of all quotes. You can use :person to call a specific quote by the Person who is attributed with the quote
- `POST /api/quotes/` : Adds a new quote to the collection when it is provided a person and quote
## Contributing
Contributions are welcome. If you have something to add, please fork this repository and create a pull request if you are going to work on this repository.
##  License
This project is released under the [Unlicense](https://unlicense.org).
