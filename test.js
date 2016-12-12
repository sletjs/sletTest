import test from 'ava'

var app = require('./app')
var sletTest = require('.')

test.cb('sletTest()', t => {
  sletTest(app)
    .get('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
      t.end()
    })
})

test('yield sletTest()', function * (t) {
  let res = yield sletTest(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})

test('async sletTest()', async (t) => {
  let res = await sletTest(app)
    .get('/')

  t.is(200, res.status)
  t.is(res.text, 'Hello Koa', 'res.text == Hello Koa')
})
