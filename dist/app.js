"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
router.get('/*', async (ctx) => {
    ctx.body = "Hi TS 123123";
});
app.use(router.routes());
module.exports = app;
//# sourceMappingURL=app.js.map