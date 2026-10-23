import { Hono } from "hono";
import { cors } from "hono/cors";
import webhooksRouter from "./routes/webhooks";
import userRouter from "./routes/user";
import { clerkMiddleware } from "@clerk/hono";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.use(
  "*",
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  }),
);

const routes = app
  .route("/webhooks", webhooksRouter)
  .route("/user", userRouter);

export type AppType = typeof routes;
export default app;
