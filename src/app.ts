import * as Koa from 'koa';
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
router.get('/*', async (ctx) => {
  ctx.body = "Hi TS 哈哈哈";
})
app.use(router.routes());
module.exports = app;