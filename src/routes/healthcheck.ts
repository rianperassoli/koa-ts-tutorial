import Router from "koa-router";
const router = new Router();
router.get("/ping", ctx => {
  try {
    ctx.body = {
      status: "success",
      data: "pong"
    };
  } catch (error) {
    console.error(error);
  }
});

export default router;
