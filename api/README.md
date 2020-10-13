# JSON TV Quotes API

This is the API that consumes data from the `quotes.json` source in the root directory, and manipulates it according to certain queries on the API. It is built as a wrapper to *easily* get TV quotes contributed by the open-source community.  

## Endpoints
`GET /` | Returns all quotes.  
`GET /:query` | Searches all authors, quotes, and sources that match the query.  
`GET /type/:type` | Search by type, either 'tv' or 'movie'.  
`GET /language/:lang` | Search by language, see [quotes.json](https://github.com/msramalho/json-tv-quotes/blob/master/quotes.json) for supported language types.  
`GET /author/:author` | Search by author. This doesn't have to be **exact**, and searches if the author contains the query string.  
`GET /source/:source` | Search by source, also doesn't have to be an exact string, and returns all matching sources.  
`GET /quote/:quote` | Search by quote, also doesn't have to be an exact string, and returns all matching quotes.  

## Installation & Setup
```
git clone https://github.com/msramalho/json-tv-quotes.git
cd json-tv-quotes/api
npm install
```
Don't forget to create an `.env` file: `cp .env.example .env`

## Production
To create a production-ready deployment for the API service, you will need to build the project:
```
npm run build
```
By default, TypeScript compiles all built files to `/`, **this** API directory.   
You can then run the `index.js` script as you would with any other Node project:
```
node index.js
```
  
### Development
After cloning and installing dependencies, you can edit the API as much as you want. I've consolidated it all into one file for simplicity (as it really doesn't require a lot of stuff).  
