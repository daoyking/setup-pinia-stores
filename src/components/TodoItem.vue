<template>
	<li>
		{{ todo.context }}
		<button @click="todoStore.removeTodo(todo)">remove</button>
	</li>
</template>

<script lang="ts" setup>
import { ITodo, useTodoStore } from "../stores"
defineProps<{ todo: ITodo }>()

const todoStore = useTodoStore()
</script>

<style scoped></style>
