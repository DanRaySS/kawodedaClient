import { IGood } from "entities/Good";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: IGood[];
  selectedItem: IGood | null;

  isCartOpen: boolean;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  select: (good: IGood) => void;
  unselect: () => void;

  add: (good: IGood) => void;
  remove: (id: number) => void;
  clear: () => void;

  increase: (id: number) => void;
  decrease: (id: number) => void;

  getTotalPrice: () => number;
  getTotalCount: () => number;
}


export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      selectedItem: null,
      isCartOpen: false,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((s) => ({ isCartOpen: !s.isCartOpen })),


      select: (good) => set({ selectedItem: good }),

      unselect: () => set({ selectedItem: null }),

      add: (good) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === good.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === good.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...good, qty: 1 }],
          };
        }),


      remove: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clear: () => set({ items: [] }),

      increase: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
            .filter((i) => i.qty > 0),
        })),

      getTotalPrice: () => {
        return get().items.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        );
      },

      getTotalCount: () => {
        return get().items.reduce((acc, item) => acc + item.qty, 0);
      },
    }),
    { name: "cart-store" }
  )
);