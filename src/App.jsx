import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  addBtn.addEventListener('click', () => {
      const taskText = input.value.trim();
      if (taskText !== "") {
          const li = document.createElement('li');
          li.textContent = taskText;

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', () => {
              todoList.removeChild(li);
          });

          li.appendChild(deleteBtn);
          todoList.appendChild(li);
          input.value = '';
      }
  });

  // Allow pressing "Enter" to add a todo item
  input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addBtn.click();
      }
  });
});