import express, { Express, Request, Response } from 'express';
var quotes: Quote[] = require('../quotes.json');

interface Quote {
    type: 'tv' | 'movie';
    language: string;
    source: string;
    quote: string;
    author: string;
}

/**
 * Create the app
 */
const app: Express = express();
require('dotenv').config()

let port = process.env.PORT;
if (!port || (port && isNaN(Number.parseInt(port)))) {
    throw new Error('Port is not a number.');
}

app.listen(port);

/**
 * Return all quotes
 */
app.get('/', (req: Request, res: Response) => res.json(quotes));

/**
 * Get by either:
 * Source
 * Quote
 * Author
 * @param query The query to search for
 */
app.get('/:query', (req: Request, res: Response): Response => {
    let query = req.params.query.toLowerCase();
    let ret = quotes.filter((quote: Quote) => 
    (quote.source && quote.source.toLowerCase().includes(query)) ||
    (quote.quote && quote.quote.toLowerCase().includes(query)) ||
    (quote.author && quote.author.toLowerCase().includes(query)));

    return res.json(ret);
});

/**
 * Get by type
 * @param type The type of media
 */
app.get('/type/:type', (req: Request, res: Response): Response => {
    if (['tv', 'movie'].indexOf(req.params.type) < 0) {
        return res.json({error: 'Invalid type.'});
    }

    let ret = quotes.filter((quote: Quote) => quote.type === req.params.type);
    return res.json(ret);
});

/**
 * Get by language
 * @param lang Language
 */
app.get('/language/:lang', (req: Request, res: Response): Response => {
    let ret = quotes.filter((quote: Quote) => quote.language && quote.language === req.params.lang);
    return res.json(ret);
});

/**
 * Get by author
 * @param author Author
 */
app.get('/author/:author', (req: Request, res: Response): Response => {
    let ret = quotes.filter((quote: Quote) => quote.author && quote.author === req.params.author);
    return res.json(ret);
});

/**
 * Get by source
 * @param source Source
 */
app.get('/source/:source', (req: Request, res: Response): Response => {
    let ret = quotes.filter((quote: Quote) => quote.source
        && typeof quote.source === 'string'
        && quote.source.toLowerCase().includes(req.params.source.toLowerCase()
    ));

    return res.json(ret);
});

/**
 * Get by quote
 * @param quote Quote
 */
app.get('/quote/:quote', (req: Request, res: Response): Response => {
    let ret = quotes.filter((quote: Quote) => quote.quote && quote.quote.toLowerCase().includes(req.params.quote.toLowerCase()));
    return res.json(ret);
});
