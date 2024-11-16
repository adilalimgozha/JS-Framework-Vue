<template>
  <div class="todo">
    <h1>To-Do List</h1>
    <form class="form_text" @submit.prevent="addTask">
      <input class="input_text" v-model="newTaskTitle" placeholder="Task Title" required />
      <select class="input_text" v-model="newTaskPriority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button class="input_text" type="submit">Add Task</button>
    </form>

    <transition-group class="list" name="list" tag="ul">
      <li class="list_item" v-for="task in sortedTasks" :key="task.id" :class="taskClass(task)">
        <div>
          <input type="checkbox" @click="toggleTask(task)">
          <span :style="taskStyle(task)">
            {{ task.title }}
          </span>
        </div>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </transition-group>

    <p class="pending_title">Pending tasks: {{ pendingTaskCount }}</p>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';


interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}


const tasks = ref<Task[]>([]);
const newTaskTitle = ref('');
const newTaskPriority = ref('low');


const addTask = () => {
  const newTask: Task = {
    id: Date.now(),
    title: newTaskTitle.value,
    priority: newTaskPriority.value,
    completed: false,
  };
  tasks.value.push(newTask);
  newTaskTitle.value = '';
  newTaskPriority.value = 'low';

  nextTick(() => scrollToNewTask()); 
};


const toggleTask = (task: Task) => {
  task.completed = !task.completed;
};


const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};


const taskClass = (task: Task) => ({
  'high-priority': task.priority === 'high',
  'medium-priority': task.priority === 'medium',
  'completed-task': task.completed,
});


const taskStyle = (task: Task) => ({
  textDecoration: task.completed ? 'line-through' : 'none',
});


const pendingTaskCount = computed(() => tasks.value.filter(task => !task.completed).length);


const sortedTasks = computed(() => {
  return [...tasks.value].sort((a, b) => {
    const priorities = { low: 1, medium: 2, high: 3 };
    return priorities[b.priority] - priorities[a.priority];
  });
});


watch(tasks, (newTasks, oldTasks) => {
  console.log('Task list changed');
});


const scrollToNewTask = () => {
  const lastTask = document.querySelector('li:last-child');
  if (lastTask) {
    lastTask.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>


<style scoped>
.todo {
  text-align: center;
  width: 100%;
  background-color: rgb(2, 161, 84);
  min-height: 40em;
}

.completed-task {
  text-decoration: line-through;
}

.high-priority {
  color: red;
}

.medium-priority {
  color: yellow
}

.list {
  list-style-type: none;
  font-size: 1.5em;
}

.list_item {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: 0.5em 20em;

}

.input_text {
  height: 2em;
  margin: 1em;
}


.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.pending_title {
  font-size: 2em;
  font-weight: bold;
}
</style>

