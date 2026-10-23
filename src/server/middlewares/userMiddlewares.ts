import { createMiddleware } from "hono/factory";
import { getAuth } from "@clerk/hono";
import { db } from "@/src/server/prisma/prismaDB";
import type { HonoEnv } from "../types/hono";

export const requireDbUser = createMiddleware<HonoEnv>(async (c, next) => {
  const { userId } = getAuth(c, { acceptsToken: "session_token" });

  if (!userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    c.set("dbUser", user);
    return next();
  } catch (error) {
    console.error("Error fetching user in API route:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});
