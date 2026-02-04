import {useState} from 'react'
import './index.css'

const TodoListItem = props => {
  const {todoItem, deleteTodo, toggleComplete, updateTitle} = props
  const {id, title, isCompleted} = todoItem

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)

  const onSave = () => {
    updateTitle(id, editedTitle)
    setIsEditing(false)
  }

  return (
    <li className="item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleComplete(id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
        />
      ) : (
        <p className={isCompleted ? 'completed' : ''}>{title}</p>
      )}
      <div className="controls">
        {isEditing ? (
          <button type="button" onClick={onSave}>
            Save
          </button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button type="button" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoListItem
