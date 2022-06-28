const EventEmitter = require('events');

const emitter = new EventEmitter();

class Router {
  constructor() {
    //  {
    //   '/users': {
    //     GET: handler1,
    //     POST: handler2,
    //     DELETE: handler3,
    //   },
    // };
    this.endpoints = {};
  }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`Method ${method} on endpoint ${path} already defined`);
    }

    endpoint[method] = handler;

    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      console.log(`[${path}]:[${method}]`);
      handler(req, res);
    });
  }

  get(path, handler) {
    this.request('GET', path, handler);
  }
  post(path, handler) {
    this.request('POST', path, handler);
  }
  put(path, handler) {
    this.request('PUT', path, handler);
  }
  delete(path, handler) {
    this.request('DELETE', path, handler);
  }
}

module.exports = { Router, emitter };
