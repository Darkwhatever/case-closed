import { Hono } from "hono";
import { requireDbUser } from "../middlewares/userMiddlewares";
import type { HonoEnv } from "../types/hono";

const user = new Hono<HonoEnv>();

// global error handler
user.onError((err, c) => {
  console.error("API Error:", err);
  return c.json({ error: "Internal server error" }, 500);
});

// /api/user route used for fetching the current user's profile
user.get("/", requireDbUser, async (c) => {
  return c.json(c.var.dbUser, 200);
});

user.get("/boilerplate", requireDbUser, async (c) => {
  const { username, firstName, avatarUrl } = c.var.dbUser;
  const user = {
    username,
    firstName,
    avatarUrl,
  };
  return c.json(user, 200);
});

export default user;
