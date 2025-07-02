"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_postgres_1 = require("drizzle-orm/node-postgres");
var env_server_1 = require("@/config/env.server");
var db = (0, node_postgres_1.drizzle)(env_server_1.env.DB_URL);
exports.default = db;
