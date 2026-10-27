import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { initialType } from "../interfaces/storeInterfaces";
const resolveValue = (value: any, currentValue: any) =>
  typeof value === "function" ? value(currentValue) : value;

const initialState: initialType = {
  selectedTap: "discover",
};

export const useGlobalStore = create<initialType>()(
  immer(() => ({ ...initialState })),
);

export const setSelectedTap = (value: string) =>
  useGlobalStore.setState((state) => {
    state.selectedTap = resolveValue(value, state.selectedTap);
  });
