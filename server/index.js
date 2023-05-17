/* eslint-disable no-undef */
const express = require('express')
const app = express()
const port = 3000

const {NEWS_API_KEY} = require("./keys")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.get('/home', (req, res) => {
 // res.send('Hello World!')
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI(NEWS_API_KEY);
  newsapi.v2.topHeadlines({
    sources:'associated-press,bbc-news,reuters,the-wall-street-journal,npr',
    pageSize:20,
    page:1,
    language: 'en',
  }).then(response => {
    res.status(200).send(response.articles)
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})