const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const proxy = require("http-proxy-middleware");
  const morgan = require("morgan");

  server.use(morgan("dev"));

  server.use(
    "/api",
    proxy({
      target: "https://jsonplaceholder.typicode.com/todos/1",
      changeOrigin: true,
      pathRewrite: { [`^api/`]: "/" },
      logLevel: "debug"
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
