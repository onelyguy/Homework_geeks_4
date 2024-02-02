import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList/TodoList';
import UsersPage from './pages/UsersPage/UsersPage';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import FormPage from './pages/FormPage/FormPage';
import PokemonInfo from './pages/PokemonInfo/PokemonInfo';
import Menu from './components/menu/Menu';


function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [local, setLocal] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  
  const handleShow = () => setShow(prevState => !prevState);

  const BASE_URL = 'https://jsonplaceholder.typicode.com/';
  const getApi = async (endpoint) => {
    const data = await fetch(BASE_URL + endpoint);
    const users = await (data.json());
    setUsers(users)
  };

  const getFromLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem('todos')));
  };

  const handleAdd = () => {
    setTasks(prev => [...prev, {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      task: input
    }
    ]
    );
    console.log(tasks);
  };

  const handleEdit = (newTitle) => {
    console.log(newTitle, 'handleEdit');
    tasks.map(task => {
      if (task.id === newTitle.id) {
        return task.title = newTitle.title;
      }
    });
    setTasks(tasks);
  };

  const handleDone = (id) => {
    console.log(id, 'done');
    tasks.map(task => {
      if (task.id === id) {
        return task.completed = !task.completed;
      }
      return tasks;
    });
    setTasks([...tasks]);
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setTasks(filteredTasks);
  };

  const handleDelete = (id) => {
    console.log(id);
    const deleted = tasks.filter(task => task.id !== id);
    setTasks(deleted);
  };

  const [filterOption, setFilterOption] = useState('completed');
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };
  const filterTasks = tasks.filter(task => {
    switch (filterOption) {
      case 'all':
        return true;
      case 'completed':
        return task.completed;
      case 'notCompleted':
        return !task.completed;
      default:
        return true;
    }
  });

  useEffect(() => {
    getApi(`users`)
  }, [])

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PokemonsPage />} />
        <Route path='/pokemon/:name' element={<PokemonInfo />} />
        <Route path='/FormPage' element={<FormPage />} />
        <Route path='CountPage' element={<CountPage />} />
        <Route path='/UsersPage' element={<UsersPage users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;