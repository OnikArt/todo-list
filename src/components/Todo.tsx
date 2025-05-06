import { useRef } from 'react'
import { useTodo } from '../Hooks/useTodo'
import './Todo.scss'
import Task from './layout/Task'

export default function Todo() {
	const {
		tasks,
		title,
		addTask,
		clearTask,
		titleVal,
		setTitleVal,
		descVal,
		setDescVal,
	} = useTodo()
	const desc = useRef<HTMLInputElement>(null)
	let index: number = 1

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
				<button onClick={addTask} disabled={titleVal.trim() === ''}>
					Add
				</button>
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
