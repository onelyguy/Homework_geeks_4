import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Input from './components/input/Input';
import TodoList from './components/TodoList/TodoList';
import Button from './components/button/Button';

function App() {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const [query, setquery] = useState('')
  const [state, setstate] = useState({
    query: '',
    list: []
  })
  const [tasks, setTasks] = useState([{
    id: 1,
    task: 'coding'
  },
  {
    id: 2,
    task: 'eat'
  },
  {
    id: 3,
    task: 'sleep'
  }])

  const handleShow = () => setShow(!show)

  const handleAdd = () => {
    setTasks(prev => [...prev, {
        id: tasks.length + 1,
        task: input
      }
      ]
    )
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleChange = (e) => {
    const results = tasks.filter(task => {
        if (e.target.value === "") return tasks
        return task.task.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setstate({
        query: e.target.value,
        list: results
    })
  }

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  return (
    <div>
      {
        show && 
        <Modal 
          handleShow={handleShow} 
          onChangeInput={onChangeInput}
          handleAdd={handleAdd}            
        >
        </Modal>
      }
      <Button action={handleShow} text={'Открыть'} />
      <Input
        type="search"
        value={state.query}
        onChangeInput={handleChange}
      />
      {state.query ? (
        state.list.length > 0 ? (
          <TodoList tasks={state.list} handleDelete={handleDelete} />
        ) : (
          <p>Соответствующих результатов не найдено.</p>
        )
      ) : (
        <TodoList tasks={tasks} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
