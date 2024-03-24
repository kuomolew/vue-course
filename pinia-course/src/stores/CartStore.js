import { defineStore, acceptHMRUpdate } from "pinia";
import { groupBy } from "lodash";

import { useLocalStorage } from "@vueuse/core";

import { useAuthUserStore } from "@/stores/AuthUserStore";

export const useCartStore = defineStore("CartStore", {
  historyEnabled: true,

  state: () => {
    return {
      items: useLocalStorage("CartStore:items", []),
    };
  },

  getters: {
    count: (state) => state.items.length,

    isEmpty: (state) => state.count === 0,

    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },

    groupCount: (state) => (name) => state.grouped[name].length,

    totalPrice: (state) =>
      state.items.reduce((prev, current) => prev + current.price, 0),
  },

  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      console.log(
        `${authUserStore.username} just bought ${this.count} items at a total of $${this.totalPrice}`
      );
    },
    addItems(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item });
      }
    },

    removeItems(name) {
      this.items = this.items.filter((item) => item.name !== name);
    },

    setItemCount(item, count) {
      this.removeItems(item.name);
      this.addItems(count, item);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
