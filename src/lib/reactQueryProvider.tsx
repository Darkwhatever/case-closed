"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { get, set, del } from "idb-keyval";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours by default
          },
        },
      }),
  );

  const [persister] = useState(() => {
    if (typeof window !== "undefined") {
      return createAsyncStoragePersister({
        storage: {
          getItem: async (key) => (await get(key)) ?? null,
          setItem: async (key, value) => await set(key, value),
          removeItem: async (key) => await del(key),
        },
      });
    }
    return undefined;
  });

  if (!persister) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            return (
              query.state.status === "success" && query.meta?.persist !== false
            );
          },
        },
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
