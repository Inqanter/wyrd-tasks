<template>
  <section class="tasks">
    <h1 class="home__title">Wyrd tasks</h1>
    <div class="tasks__content">
      <TasksColumn
        v-for="column in columns"
        :key="column.id"
        :title="column.title"
        @dropTask="dropTask($event, column)">
        <li
          class="column__item"
          v-for="task in filteredTasks(column, tasks)"
          :key="task.id">
          <BaseTask
            @showTask="showTask(task)"
            @takeTask="takeTask($event, task.id)"
            :title="task?.name"
            :description="task.description" />
        </li>
        <li class="column__item">
          <NewTask v-model="formData.name" @submit="submitTask(column.id)" />
        </li>
      </TasksColumn>
    </div>
    <div class="tasks__footer"></div>
    <BaseModal class="task-modal" :show="showModal" @close="closeModal">
      <router-view />
    </BaseModal>
  </section>
</template>

<script setup>
import BaseTask from "../components/tasks/BaseTask.vue";
import TasksColumn from "../components/tasks/TasksColumn.vue";
import NewTask from "../components/tasks/NewTask.vue";
import BaseModal from "../components/ui-kit/BaseModal.vue";
import { computed, ref, reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useTasksStore } from "../stores/tasks";
const tasksStore = useTasksStore();
const route = useRoute();
const router = useRouter();
const columns = computed(() => tasksStore.getColumns);
const tasks = computed(() => tasksStore.getTasks);

const filteredTasks = computed(() => {
  return (column, tasks) => {
    return tasks.filter((task) => Number(task.column) === Number(column.id));
  };
});

const isTaskPage = computed(() => {
  return tasksStore.getTask(route.params.id) ? true : false;
});

const showTask = (task) => {
  router.push({ name: "task", params: { id: task.id } });
  showModal.value = true;
};

const showModal = ref(isTaskPage.value);

const closeModal = () => {
  showModal.value = !showModal.value;
};

const formData = reactive({
  name: ""
});

const submitTask = (columnId) => {
  if (formData.name.length === 0) {
    return;
  }
  tasksStore.createTask(columnId, formData.name);
  formData.name = "";
};

const takeTask = (e, taskId) => {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.setData("task-index", taskId);
};

const dropTask = (e, toColumn) => {
  const taskIndex = e.dataTransfer.getData("task-index");
  tasksStore.moveTask(toColumn.id, taskIndex);
};

onBeforeMount(() => {
  if (!isTaskPage.value) {
    router.replace({ name: "tasks" });
  }
});
</script>

<style lang="scss">
.tasks__content {
  display: flex;
  gap: 40px 80px;
  margin-bottom: 20px;
}

.task__input {
  display: block;
  font-size: 16px;
  margin: 0;
  color: var(--color-light);
  width: 100%;
  border: none;
  background-color: transparent;
}

.task__input::placeholder {
  color: var(--color-light);
}

.task__input:focus {
  outline: none;
}

@media only screen and ($tablet-width) {
  .tasks__content {
    gap: 20px;
  }
}
</style>
