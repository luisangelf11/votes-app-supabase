import { create } from "zustand";

type Store = {
  registration: string | null;
  login: (data: string) => void;
  logout: () => void;
};

export const useStore = create<Store>()((set) => ({
  registration: null,
  login: (data: string) => set({ registration: data }),
  logout: () => set({ registration: null }),
}));


