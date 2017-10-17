const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();

const app = new Koa();

router.get('/', async ctx => {
  ctx.body = {
    data: 'Sending some JSON',
    person: {
      name: 'Ferdinand',
      lastname: 'Vaněk',
      role: 'Brewery worker',
      age: 42
    }
  };
});

app.use(router.routes());

module.exports = app;
