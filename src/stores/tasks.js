import { defineStore } from "pinia";
import { getRandomNumber } from "../mock/utils";
import { tasks } from "../mock/tasks";
import { columns } from "../mock/columns";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    columns,
    tasks
  }),
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getColumns(state) {
      return state.columns;
    },
    getTask(state) {
      return (id) => {
        return state.tasks.find((task) => Number(task.id) === Number(id));
      };
    }
  },
  actions: {
    createTask(columnId, name) {
      this.tasks.push({
        id: getRandomNumber(0, 99),
        column: columnId,
        name,
        description: ""
      });
    },
    moveTask(toColumn, taskIndex) {
      const taskToMove = this.tasks.find(
        (task) => Number(task.id) === Number(taskIndex)
      );
      taskToMove.column = Number(toColumn);
    }
  }
});
