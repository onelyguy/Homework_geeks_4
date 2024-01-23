import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [tasks, setTasks] = useState([{
    id:1 ,
    task: 'coding',
    completed: false
  },
  {
    id:2,
    task: 'eat',
    completed: false
  },
  {
    id:3,
    task: 'sleep',
    completed: false
  }])

  const handleShow = () => setShow(prevState => !prevState);

  const handleAdd = () => {
    setTasks(prev => [ ...prev, {
        id: tasks.length===0 ? 1 : tasks[tasks.length -1].id+1,
        task: input
      }
      ]
    );
  };

  const handleDone = (id) => {
    tasks.map(task => {
      if(task.id===id) {
        return task.completed = !task.completed
      }
      return tasks
    })
    setTasks([...tasks])
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  const handleSearch = (event) => {
      setSearchInput(event.target.value)
    const filteredTasks = tasks.filter(task =>
      task.task.toLowerCase().includes(event.target.value.toLowerCase()))
    setTasks(filteredTasks)
  }
  const handleDelete = (id) => {
    const deleted = tasks.filter(task => task.id!==id)
    setTasks(deleted)
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
      <Button action={handleShow} text={'открыть'}/>
      <Input placeholder={'поиск'} type={'search'} onChangeInput={ handleSearch }/>
      <TodoList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone}/>
    </div>
  );
}


export default App;