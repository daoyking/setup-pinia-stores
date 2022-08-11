import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"

export type ITodo = {
	id: number
	context: string
}

let id = 1

const generatorId = (): number => id++

export const useTodoStore = defineStore("todo", () => {
	const count = computed(() => todo.length)

	const context = ref("")

	const todo = reactive<ITodo[]>([])

	function addTodo() {
		todo.push({
			id: generatorId(),
			context: context.value,
		})

		reset()
	}

	function reset() {
		context.value = ""
	}

	function removeTodo(item: ITodo) {
		const index = todo.indexOf(item)
		todo.splice(index, 1)
	}

	return {
		count,
		context,
		todo,
		addTodo,
		removeTodo,
	}
})
