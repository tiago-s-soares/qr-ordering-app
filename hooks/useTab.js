"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTab = create(
    persist(
        (set, get) => ({
            items: [],
            addOrder: (orderItems) => {
                // merge new order items with existing tab
                const updated = [...get().items, ...orderItems];
                set({ items: updated });
            },
            clear: () => set({ items: [] }),
        }),
        {
            name: "tab-storage", // persists to localStorage
        }
    )
);