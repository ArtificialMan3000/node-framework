const EventEmitter = require('events');
const http = require('http');

class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this.#createServer();
    this.middlewares = [];
  }

  use(middleware) {
    if (typeof middleware === 'function') {
      this.middlewares.push(middleware);
    }
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((endpoint) => {
      const path = router.endpoints[endpoint];

      Object.keys(path).forEach((method) => {
        const handler = path[method];

        const routeMask = this.#getRouteMask(endpoint, method);

        this.emitter.on(routeMask, (req, res) => {
          // eslint-disable-next-line
          console.log(`Routing on ${routeMask}...`);
          handler(req, res);
        });
      });
    });
  }

  #createServer() {
    return http.createServer((req, res) => {
      // #region Receiving request body
      let body = '';
      req.setEncoding('utf-8');
      req.on('data', (chunk) => {
        body += chunk;
      });
      // #endregion

      req.on('end', () => {
        if (body) {
          req.body = body;
        }

        // Calls middlewares
        this.middlewares.forEach((middleware) => {
          middleware(req, res);
        });

        const url = req.parsedUrl;

        const routeMask = Application.#getRouteMask(url.pathname, req.method);
        const isEmitted = this.emitter.emit(
          routeMask,
          req,
          res,
          url.searchParams
        );
        if (!isEmitted) {
          res.end('Impossible url!');
        }
      });
    });
  }

  static #getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
}

module.exports = Application;
