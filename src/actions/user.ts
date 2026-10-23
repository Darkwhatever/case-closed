import type { HeaderIcon, UserProfile } from "../interfaces/userInterfaces";
import { hc } from "hono/client";
import type { AppType } from "../server";

export const client: any = hc<AppType>("/", {
  init: {
    credentials: "same-origin",
    cache: "no-store",
  },
});

export const fetchUser = async () => {
  const response = await client.api.user.$get();

  if (!response.ok) {
    throw new Error(`Failed to fetch user (${response.status})`);
  }

  return (await response.json()) as UserProfile;
};

export const fetchUserIcon = async () => {
  const response = await client.api.user.boilerplate.$get();

  if (!response.ok) {
    throw new Error(`Failed to fetch user (${response.status})`);
  }

  return (await response.json()) as HeaderIcon;
};
