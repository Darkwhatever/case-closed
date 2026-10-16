import { Hono } from "hono";
import { cors } from "hono/cors";
import { clerkMiddleware } from "@clerk/nextjs/server";
import authRouters from "./routes/auth.ts";

const app = new Hono().basePath("/api");

app.use("*", cors());

const routes = app.route("/auth", authRouters);

export type AppType = typeof routes;
export default app;
