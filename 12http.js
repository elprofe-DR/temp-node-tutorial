const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history!");
    return;
  } else {
    res.end(
      `<h1>Ooopss!</h1>
      <p>We cant seem to find the page you requested</p>
      <a href="/">Back home</a>`
    );

  }
});
server.listen(5000);
