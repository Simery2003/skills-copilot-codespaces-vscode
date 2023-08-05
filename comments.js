// create web server// 1. import module
const http = require('http');
const url = require('url');
const queryString = require('querystring');

// 2. create web server
const app = http.createServer((req, res) => {
  // 2.1 get request url
  const { pathname, query } = url.parse(req.url, true);
  // 2.2 get request method
  const method = req.method.toLowerCase();

  // 2.3 set response header
  res.setHeader('content-type', 'application/json;charset=utf-8');

  // 2.4 set response data
  const resData = {
    pathname,
    query,
    method
  };

  // 2.5 response
  res.end(JSON.stringify(resData));
});

// 3. listen port
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
}  );