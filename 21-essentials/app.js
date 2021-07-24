window.onload = function () {
  const app = Vue.createApp({
    data() {
      return {
        task: "",
        tasksList: [],
      };
    },
    methods: {
      addTask(event) {
        this.tasksList.push(this.task);
        this.emptyInput();
      },
      removeTask(index) {
        this.tasksList.splice(index, 1);
      },
      emptyInput() {
        this.task = "";
      },
    },
    computed: {
      isNoTask() {
        return !this.tasksList.length;
      },
    },
    watch: {},
  });
  app.mount("#app");
};
