import './Task.scss'


export default function Task({title, description, onDelete} : any) {
	
	return (
		<div className='task'>
			<div className="task__info">
			<h1>{title}</h1>
			<p>{description}</p>
			</div>
			<button onClick={onDelete}>X</button>
		</div>
	)
}
