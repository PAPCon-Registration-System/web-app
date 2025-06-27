import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

export default app;
