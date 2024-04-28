import { create } from "zustand";
import { tasks } from './task'

const useTaskStore = create((set) => ({
    todos : tasks, // todos: Listan med uppgifter.
    addTodo : (todo) => set((state) => ({ todos : [...state.todos, todo]})), // addTodo: Funktion för att lägga till en ny uppgift.
    removeTodo : (id) => set ((state) => ({ todos : state.todos.filter(todo => todo.id !== id)})),// removeTodo: Funktion för att ta bort en uppgift baserat på dess id.
    toggleTodo : (id) => set ((state) => ({ todos : state.todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed } : todo)}))// toggleTodo: Funktion för att växla completed statusen för en uppgift.
}))

export {useTaskStore}