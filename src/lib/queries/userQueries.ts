import { fetchUser, fetchUserIcon } from "@/src/actions/user";
import { queryOptions } from "@tanstack/react-query";

export function getUser({ userId }: { userId: string | null }) {
  return queryOptions({
    queryKey: ["user", userId],
    queryFn: fetchUser,
    enabled: userId !== null,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    gcTime: 1000 * 60 * 60 * 48, // 1 day
    retry: 5,
  });
}

export function getUserIcon({ userId }: { userId: string | null }) {
  return queryOptions({
    queryKey: ["user-icon", userId],
    queryFn: fetchUserIcon,
    enabled: userId !== null,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    gcTime: 1000 * 60 * 60 * 48, // 1 day
    retry: 5,
  });
}
