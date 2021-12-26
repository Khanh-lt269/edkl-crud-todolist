import axios from 'axios'

const url = "https://edkl-todo-list.herokuapp.com/todos"


export const readTodos = () => axios.get(url)
export const createTodo = (newTodo) => axios.post(url, newTodo)
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo)
export const deleteTodo = (id) => axios.delete(`${url}/${id}`)