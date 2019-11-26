const express = require('express');
const app = express();

const quotes = require('./data.json');

// send GET request to /healthz to view the status of our API
app.get('/healthz', (req, res) => {
  // json method converts object to json and sends it to client
  res.json({status: "200 OK"});
});

// send GET request to /quotes to view all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// send GET request to /quotes/:id to view single quote
app.get('/quotes/:id', (req, res) => {
  const quote = quotes.quotes.find(quote => quote.id == req.params.id);

  res.json(quote);
});
// send POST request to /quotes to add a new quote
// send PUT request to /quotes/:id to edit a quote
// send DELETE request to /quotes/:id to remove a quote
// send GET request to /quotes/random to view a random quote
app.listen(3000, () => console.log('Quote API listening on port 3000!'));
