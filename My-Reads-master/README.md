# My-Reads

A bookshelf app that allows the user to select and categorize books as you have read, are want to read, or currently reading. This project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Requirements:
** npm **

## How to Run:

1. You can Download (https://github.com/stefanosu/My-Reads/archive/master.zip) or Clone (https://github.com/stefanosu/My-Reads.git) the Repository.
2. Run `npm install` to install the project dependencies.
3. Run the app using `npm start`.
4. App can be seen at: `localhost:3000`. 

## Backend Server

To simplify the development process, there is a backend server provided for you to develop against. The provided file [`BooksAPI.js`](src/Utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects. This collection represents the books currently in the bookshelves in your app.


## `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

## `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects. These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

 Resources used was Forrest Walker My Reads Walkthrough

   
