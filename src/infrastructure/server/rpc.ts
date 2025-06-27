import { hc } from "hono/client";
import type { AppType } from "./index";
import { env } from "@/config/env";

export const rpc = hc<AppType>(env.NEXT_PUBLIC_BASE_URL);
