import { factory } from "../utils/factory";

const app = factory.createApp().get("/", (c) => {
	return c.json({
		message: "Hello",
	});
});

export default app;
