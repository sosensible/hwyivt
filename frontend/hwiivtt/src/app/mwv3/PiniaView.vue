<script setup lang="ts">
import { reactive, ref } from "vue"
import { RouterLink } from "vue-router"
import { useTodosStore } from "../../stores/todos"

const todos = useTodosStore()
todos.addTodo('Prepare Outline', true)
todos.addTodo('Prepare Content')
todos.addTodo('Present')
// todos.todos[0].isFinished = false

const newToDo = ref("");
const filterState = ref("")

const show = reactive({
  focus: 0,
  list: ["bullet-1","bullet-2","bullet-3","bullet-4","bullet-5","install", "example"],
  live: [],
});

function focusCheck(item: string) {
  return show.live.includes(item);
}

function moveFocus() {
  if (show.focus < 5) {
    show.live.push(show.list[show.focus++])
  } else if (show.focus === 5) {
    show.live = show.list[show.focus++]
  } else if (show.focus === 6) {
    show.live = show.list[show.focus++]
  }
}

function addToDo() {
  todos.addTodo(newToDo.value)
  newToDo.value = ""
}
</script>

<template>
  <div>
    <div class="top-row">
      <div class="left-split">
        <h1>Pinia</h1>
        <h2>Global Data State</h2>
      </div>
      <div class="right-split">
        <a href="https://pinia.vuejs.org/">
          <img src="../../assets/pinia-logo.svg" style="height: 160px" />
        </a>
      </div>
    </div>
    
    <button @click="moveFocus">&gt;&gt;</button>

    <div>
      <ul>
        <li v-if="focusCheck('bullet-1')">
          Mutations no longer exist<br />
          Originally to connect with DevTools, not needed now.
        </li>
        <li v-if="focusCheck('bullet-2')">No complex TypeScript wrappers</li>
        <li v-if="focusCheck('bullet-3')">Stores dynamic by default</li>
        <li v-if="focusCheck('bullet-4')">Nesting not needed, still possible.</li>
        <li v-if="focusCheck('bullet-5')">Namespacing definitions not required.</li>
      </ul>
    </div>

    <pre v-if="focusCheck('install')">
      <code class="terminal" xv-if="focusCheck( 'install' )"> 
  &gt; <span class="cmd">npm install pinia</span>
      </code>
    </pre>

    <div v-if="focusCheck('example')">
      <div class="left">
        <h3>Getters</h3>
        <ul>
          <li>finished
            <ul>
              <li v-for="todo in todos.finishedTodos">
                {{ todo.text }}
              </li>
            </ul>
          </li>
          <li>unfinished
            <ul>
              <li v-for="todo in todos.unfinishedTodos">
                {{ todo.text }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <h3>ToDo List</h3>
        <ul>
          <li v-for="todo in todos.todos">
            <input type="checkbox" v-model="todo.isFinished" />
            {{ todo.text }}
          </li>
        </ul>
        <input type="text" v-model="newToDo" placeholder="New To Do" />&nbsp;
        <button type="button" @click="addToDo">Add</button>
      </div>
      <hr>
    </div>

    <hr />
    <router-link to="/mwv3/envvar">Environment Configuration (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/vitest">Unit Testing (next)</router-link>
  </div>
</template>

<style lang="scss">
.left {
  float: left;
  width: 48%;
}

.right {
  float: right;
  width: 48%;;
  margin-bottom: 8px;
}
</style>