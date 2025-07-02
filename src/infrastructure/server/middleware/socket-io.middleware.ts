import { Server } from "socket.io";
import { factory } from "../utils/factory";
import { Logger } from "@/features/shared/lib/logger";
import type { ServerType } from "@hono/node-server";

let io: Server | null;

export function initWebsocket(server: ServerType) {
	io = new Server(server, {
		cors: {
			origin: "*",
		},
		serveClient: false,
	});

	io.on("error", (err) => {
		Logger.error("A websocket error occured", { group: "ws", err });
	});
}

export const socketIoMiddleware = factory.createMiddleware(async (c, next) => {
	if (!c.var.io && io) {
		c.set("io", io);
	}
	await next();
});
