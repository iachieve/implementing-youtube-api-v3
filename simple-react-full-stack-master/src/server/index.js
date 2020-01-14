const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


// youtube code start
var search = require('youtube-search');

var opts = {
  maxResults: 10,
  key: 'AIzaSyBX5Mu1-yEIQaalSqEpFjSgSYT2XtdCTB8'
};

let videoResults ;
search('cats,dogs,', opts, function (err, results) {
  if (err) return console.log(err);

  videoResults = results;
});

// youtube code end

app.get('/api/getUsername', (req, res) => res.send(
  { 
    videoResults
  }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
