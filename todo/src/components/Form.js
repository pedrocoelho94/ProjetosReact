import styles from './Form.module.scss'
import { BsPlusSquareFill } from 'react-icons/bs'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus}) => {

   function handleSubmit(event) {
      event.preventDefault()
      const item = {
         value: inputText,
         completed: false,
         id: Math.random() * 1000
      }
      setTodos([...todos, item])
      setInputText('')
   }
   
   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Add item"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
         />

         <button type="submit">
            <BsPlusSquareFill />
         </button>

         <select name="todos" onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
         </select>
      </form>
   )
}

export default Form
