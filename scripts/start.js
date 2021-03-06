const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const proxy = require("http-proxy-middleware");
  const morgan = require("morgan");

  server.use(morgan("dev"));

  server.use(
    "/api",
    proxy({
      target: "http://kyungma.info/",
      changeOrigin: true
    })
  );

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
