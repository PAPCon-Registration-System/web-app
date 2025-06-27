import { hc } from "hono/client";
import { env } from "@/config/env.client";
import type { AppType } from "./index";

export const rpc = hc<AppType>(env.NEXT_PUBLIC_BASE_URL);
