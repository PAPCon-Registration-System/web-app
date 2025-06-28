import { factory } from "../utils/factory";

const app = factory.createApp().get("/", (c) => {
	return c.json({
		message: "World",
	});
});

export default app;
