import {Component} from 'react'
import TodoListItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isCompleted: false,
  },
]

class SampleTodos extends Component {
  state = {
    todoList: initialTodosList,
    todoInput: '',
  }

  onDeleteTodo = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(todo => todo.id !== id),
    }))
  }

  onInputChange = e => {
    this.setState({todoInput: e.target.value})
  }

  onAddTodo = e => {
    e.preventDefault()
    const {todoInput, todoList} = this.state

    if (!todoInput.trim()) return

    const parts = todoInput.trim().split(' ')
    const lastPart = parts[parts.length - 1]
    const count = Number(lastPart)

    const newTodos = []

    if (!Number.isNaN(count) && count > 1) {
      const title = parts.slice(0, -1).join(' ')
      for (let i = 0; i < count; i += 1) {
        newTodos.push({
          id: todoList.length + i + 1,
          title,
          isCompleted: false,
        })
      }
    } else {
      newTodos.push({
        id: todoList.length + 1,
        title: todoInput,
        isCompleted: false,
      })
    }

    this.setState(prev => ({
      todoList: [...prev.todoList, ...newTodos],
      todoInput: '',
    }))
  }

  toggleComplete = id => {
    this.setState(prev => ({
      todoList: prev.todoList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    }))
  }

  updateTitle = (id, newTitle) => {
    this.setState(prev => ({
      todoList: prev.todoList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  render() {
    const {todoList, todoInput} = this.state

    return (
      <div className="container">
        <div className="box">
          <h1>Simple Todos</h1>

          <form onSubmit={this.onAddTodo} className="todo-form">
            <input
              type="text"
              value={todoInput}
              onChange={this.onInputChange}
              placeholder="Todo title or 'title 3'"
            />
            <button type="submit">Add</button>
          </form>

          <ul className="todo-list">
            {todoList.map(todo => (
              <TodoListItem
                key={todo.id}
                todoItem={todo}
                deleteTodo={this.onDeleteTodo}
                toggleComplete={this.toggleComplete}
                updateTitle={this.updateTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SampleTodos
