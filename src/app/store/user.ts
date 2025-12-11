import { create } from "zustand";

interface UserState {
  user: { id: string; email: string } | null;
  setUser: (u: UserState["user"]) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));