import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
	return c.json({
		message: "World",
	});
});

export default app;
