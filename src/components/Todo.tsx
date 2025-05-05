import { useRef, useState } from 'react'
import './Todo.scss'
import TaskData from './constants'
import Task from './layout/Task'

export default function Todo() {
	const [tasks, setTasks] = useState<TaskData[]>([])
	const [titleVal, setTitleVal] = useState('')
	const [descVal, setDescVal] = useState('')

	const title = useRef<HTMLInputElement>(null)
	const desc = useRef<HTMLInputElement>(null)
	let index: number = 1

	function addTask() {
		const newTask: TaskData = {
			id: Date.now(),
			title: title.current!.value,
			description: 'Task ID:',
		}

		setTasks(prev => [...prev, newTask])
		setDescVal('')
		setTitleVal('')
	}

	function clearTask(id: number) {
		setTasks(prev => prev.filter(task => task.id !== id))
	}

	return (
		<div className='todo'>
			<div className='todo__search'>
				<input
					type='text'
					value={titleVal}
					ref={title}
					onChange={e => setTitleVal(e.currentTarget.value)}
					placeholder='Add Task...'
				/>
				<input
					type='text'
					value={descVal}
					ref={desc}
					onChange={e => setDescVal(e.currentTarget.value)}
					placeholder='Search'
				/>
				<button onClick={addTask}>Add</button>
			</div>
			{tasks.map(task => (
				<Task
					key={task.id}
					title={task.title}
					description={task.description + index++}
					onDelete={() => clearTask(task.id)}
				/>
			))}
		</div>
	)
}
