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
    };
  },
  methods: {
    addGoal() {
      if (this.newGoalValue !== "") {
        this.goals.unshift({
          name: this.newGoalValue,
          completed: false,
        });
      }
      this.newGoalValue = "";
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
    },
    toggleGoal(goal) {
      goal.completed = !goal.completed;
    },
    clearCompleted() {
      this.goals = this.goals.filter(function (goal) {
        return goal.completed === false;
      });
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
      } else if(this.selectedFilter === "Completed"){
        return this.goals.filter(function (goal) {
            return goal.completed
          });
      }
    },
  },
});

app.mount("#app");
