import styles from './TodoList.module.scss'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
   function handleDelete(id) {
      const newTodo = todos.filter(item => item.id !== id)
      setTodos([...newTodo])
   }

   function handleCompleted(id) {
      const item = todos.filter(todo => todo.id === id)
      const { completed } = item[0]

      const newTodos = todos.map(todo => {
         if (todo.id === id) todo = { ...todo, completed: !completed }
         return todo
      })

      setTodos([...newTodos])
   }

   if (!filteredTodos) return null
   return (
      <div className={styles.todoContainer}>
         <ul>
            {filteredTodos.map((item) => (
               <div
                  className={item.completed ? styles.active : ''}
                  key={item.id}
               >
                  <li>{item.value}</li>
                  <div className={styles.buttons}>
                     <button
                        onClick={() => handleCompleted(item.id)}
                        className={styles.checked}
                     >
                        <AiOutlineCheck size="1.5rem" />
                     </button>
                     <button
                        onClick={() => handleDelete(item.id)}
                        className={styles.delete}
                     >
                        <AiFillDelete size="1.5rem" />
                     </button>
                  </div>
               </div>
            ))}
         </ul>
      </div>
   )
}

export default TodoList
