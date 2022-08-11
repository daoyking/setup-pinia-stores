<template>
	<div>{{ count }}</div>
	<div>
		<todo-list></todo-list>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../src/stores"
import TodoList from "../src/components/TodoList.vue"
import { storeToRefs } from "pinia"
const todoStore = useTodoStore()
// 解构会出现响应式丢失问题
// 需要包裹storeToRefs,跟vue3一样
const { count } = storeToRefs(todoStore)
</script>

<style scoped></style>
