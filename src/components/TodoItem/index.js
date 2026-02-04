// Write your code here
import './index.css'

const TodoListItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div className="item">
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoListItem
