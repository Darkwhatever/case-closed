import { Hono } from "hono";
import { cors } from "hono/cors";
import { clerkMiddleware } from "@clerk/nextjs/server";

const app = new Hono().basePath("/api");

app.use("*", cors());

const routes = app;

export type AppType = typeof routes;
export default app;
