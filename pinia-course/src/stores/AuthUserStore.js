import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "UserName",
    };
  },
  actions: {
    visitTwitterProfile() {
      window.open("https://twitter.com", "_blank");
    },
  },
});
