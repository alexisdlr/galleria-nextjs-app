import { create } from "zustand";

type LightboxStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useLightboxStore = create<LightboxStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
