const http = require('http');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');

const app = express();

app.use(express.static(path.join(process.cwd(), '/public')));
app.set('views', path.join(process.cwd(), '/views'));

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));
app.use('/',route);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://:${port}/`);
});
