'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: false
});

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

module.exports = app
