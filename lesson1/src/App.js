import './App.css';
import Component from './components/component/Component.js' 
import Component2 from './components/component2/Component2.js'
import Button from './components/button/Button.js'
import Example from './components/Example.js'
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  const navbar = ['Главная', 'О нас', 'Контакты']

  return (
    <div>
      <Header navbar={navbar}/>
      <h1>Hello</h1>
      <Component text={'Ermek'}/>
      <Component2 age={18}/>
      <Button text={'Delete'}/>
      <Button text={'Add'}/>
      <Button text={'Update'}/>
      <Example>
        <p style={{
          color: 'green',
          fontSize: '20px' 
        }}>
          Ermek
        </p>
      </Example>
      <Footer link={'online.geeks.kg'}/>
    </div>
  );
}

export default App;
