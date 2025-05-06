import { useEffect, useRef, useState } from 'react'
import TaskData from '../components/constants'

export const useTodo = () => {
	const title = useRef<HTMLInputElement>(null)
	const [tasks, setTasks] = useState<TaskData[]>([])
	const [titleVal, setTitleVal] = useState('')
	const [descVal, setDescVal] = useState('')
	const [allTasks, setAllTasks] = useState<TaskData[]>([])

	const searchTask = (searchText: string, listofTasks: TaskData[]) => {
		if (!searchText) {
			return allTasks
		}

		return allTasks.filter(({ title }: any) =>
			title.toLowerCase().includes(searchText.toLowerCase())
		)
	}

	const addTask = () => {
		if (!title.current!.value) {
			return console.log('enter input value')
		} else {
			setTasks(prev => [
				...prev,
				{
					id: Date.now(),
					title: title.current!.value,
					description: 'Task ID:',
				},
			])
			setAllTasks([
				...tasks,
				{
					id: Date.now(),
					title: title.current!.value,
					description: 'Task ID:',
				},
			])
			setDescVal('')
			setTitleVal('')
		}
	}

	const clearTask = (id: number) => {
		setTasks(prev => prev.filter(task => task.id !== id))
	}

	useEffect(() => {
		const filteredTasks = searchTask(descVal, tasks)
		setTasks(filteredTasks)
	}, [descVal])

	return {
		tasks,
		title,
		addTask,
		clearTask,
		titleVal,
		setTitleVal,
		descVal,
		setDescVal,
	}
}
