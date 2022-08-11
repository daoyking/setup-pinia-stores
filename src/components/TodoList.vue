<template>
	<div>
		<input type="text" v-model="todoStore.context" />
		<button @click="todoStore.addTodo">add</button>
	</div>
	<ul v-for="todo in todoStore.todo" :key="todo.id">
		<todo-item :todo="todo"></todo-item>
	</ul>
</template>

<script lang="ts" setup>
import { useTodoStore } from "../stores"
import TodoItem from "./TodoItem.vue"
const todoStore = useTodoStore()
</script>

<style scoped></style>
