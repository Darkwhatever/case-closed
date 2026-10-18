import { Hono } from "hono";
import { cors } from "hono/cors";
import { clerkMiddleware } from "@clerk/nextjs/server";
import webhooksRouter from "./routes/webhooks";

const app = new Hono().basePath("/api");

app.use("*", cors());

const routes = app.route("/webhooks", webhooksRouter);

export type AppType = typeof routes;
export default app;
