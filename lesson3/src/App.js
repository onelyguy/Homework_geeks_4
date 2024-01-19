import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import TodoList from './components/TodoList/TodoList';
import Button from './components/button/Button';

function App() {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
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
    console.log(id);
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
      <TodoList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
