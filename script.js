const app = Vue.createApp({
  data() {
    return {
      goals: [
        {
          name: "Complete Online Javascript Course",
          completed: false,
        },

        {
          name: "Jog around the pack 3x",
          completed: false,
        },

        {
          name: "10 mins meditation",
          completed: false,
        },

        {
          name: "Read for 1 hour",
          completed: false,
        },

        {
          name: "Pick up groceries",
          completed: false,
        },

        {
          name: "Complete Todo App on Frontend Mentor",
          completed: false,
        },
      ],
      selectedFilter: "All",
      newGoalValue: "",
      lightMode: false,
    };
  },
  watch: {
    lightMode() {
      localStorage.setItem("lightMode", JSON.stringify(this.lightMode));
    },
  },
  methods: {
    addGoal() {
      if (this.newGoalValue !== "") {
        this.goals.unshift({
          name: this.newGoalValue,
          completed: false,
        });
        localStorage.setItem("goals", JSON.stringify(this.goals));
      }
      this.newGoalValue = "";
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
      localStorage.setItem("goals", JSON.stringify(this.goals));
    },
    toggleGoal(goal) {
      goal.completed = !goal.completed;
      localStorage.setItem("goals", JSON.stringify(this.goals));
    },
    clearCompleted() {
      this.goals = this.goals.filter(function (goal) {
        return goal.completed === false;
      });
      localStorage.setItem("goals", JSON.stringify(this.goals));
    },
    toggleTheme() {
      this.lightMode = !this.lightMode;
    },
  },
  computed: {
    remainingGoals() {
      return this.goals.filter(function (goal) {
        return goal.completed === false;
      });
    },
    filteredGoals() {
      if (this.selectedFilter === "All") {
        return this.goals;
      } else if (this.selectedFilter === "Active") {
        return this.goals.filter(function (goal) {
          return goal.completed === false;
        });
      } else if (this.selectedFilter === "Completed") {
        return this.goals.filter(function (goal) {
          return goal.completed;
        });
      }
    },
  },
  created() {
    this.lightMode = JSON.parse(localStorage.getItem("lightMode"));
    this.goals = JSON.parse(localStorage.getItem("goals")) || this.goals;
  },
});

app.mount("#app");
