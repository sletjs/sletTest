# slettest

koa with [supertest](https://github.com/visionmedia/supertest) for [ava](https://github.com/avajs/ava) or [mocha](https://github.com/mochajs/mocha)

[![npm version](https://badge.fury.io/js/slettest.svg)](http://badge.fury.io/js/slettest)
[![Build](https://travis-ci.org/i5ting/slettest.svg?branch=master)](https://travis-ci.org/i5ting/slettest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Usages

```
var slettest = require('slettest')
var app = require('./app')

test.cb("slettest()", t => {
  slettest(app)
    .get("/")
    .expect(200, function (err, res) {
      t.ifError(err)
      var userId = res.body.id;
      t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
      t.end()
    });
});
```

with generator

```
test('yield slettest()', function * (t) {
  let res = yield slettest(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
```

with async/await

```
test('async slettest()', async (t) => {
  let res = await slettest(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
```

## Test

```
$ npm test
```

with watch mode

```
npm test -- -w 
```


## Document

see http://visionmedia.github.io/superagent/

