const express = require('express');
const app = express();

const { quotes } = require('./data.js');
const { getRandomElement } = require('./utils.js');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = express.Router();
app.use('/api/quotes', quotesRouter);

quotesRouter.get('/random', (req, res, next) => {
    const randQuo = getRandomElement(quotes);
    if ({quotes: randQuo}) {
        console.log('Quote Found!')
        res.send({quote: randQuo});
    } else {
        res.status(404).send('No quotes found.');
    }
});

quotesRouter.get('/', (req, res, next) => {
    const author = req.query.person;
    if (author) {
        const authorQuotes = quotes.filter(quote => {return quote.person === author});
        console.log(authorQuotes);      
        res.send({quotes: authorQuotes});
    } else {
        res.send({ quotes: quotes})
    }
})

quotesRouter.post('/', (req, res, next) => {
    const newQuo = req.query.quote;
    const newPer = req.query.person;
    if (newQuo && newPer) {
        console.log('success');
        quotes.push({quote: newQuo, person: newPer});
        res.send({quote: {quote: newQuo, person: newPer}});
    } else {
        res.status(400).send();
    }
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})