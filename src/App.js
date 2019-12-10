import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg'; import do logo do react
import Layout from './components/Layout/Layout';
import TaskList from './containers/TaskList/TaskList';

/* To Do:

  Adicionar metodo para clique dos botoes

*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <TaskList />
        </Layout>














        {/* Bloco para usar o logo do react depois */}
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
      </div>
    );
  }
}

export default App;
