import create from "zustand";

export const usePaginationStore = create((set) => ({
  page: 1,
  setPage: (newPage) => set({ page: newPage }),
}));
