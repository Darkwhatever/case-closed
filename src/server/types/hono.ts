import type { User } from "../../../prisma/generated/client";

export type HonoEnv = {
  Variables: {
    dbUser: User;
  };
};
