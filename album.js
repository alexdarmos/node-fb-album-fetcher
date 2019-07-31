const express = require('express');
const request = require('request-promise');
require('dotenv').config();
let ALBUM_ID;
let ACCESS_TOKEN;

if (process.env.NODE_ENV !== 'production') {
  ALBUM_ID = process.env.NODE_APP_ALBUM_ID;
  ACCESS_TOKEN = process.env.NODE_APP_ACCESS_TOKEN;

  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  ALBUM_ID = process.env.ALBUM_ID;
  ACCESS_TOKEN = process.env.ACCESS_TOKEN;
}

//lets you have nested routes as modules
const albums = express.Router();
// const questionData = require('./questionData');

albums.get('/', (req, res) => {
  console.log(`get fb data`);

  const options = {
    method: 'GET',
    url: `https://graph.facebook.com/${ALBUM_ID}/?fields=photos{images}&access_token=${ACCESS_TOKEN}`,
    dataType: 'json'
  };

  request(options).then(response => {
    const parsedData = JSON.parse(response);
    let dataObj = parsedData.photos.data;
    res.json({ data: dataObj });
  });
});

module.exports = albums;
