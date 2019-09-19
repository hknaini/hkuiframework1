import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {

  getReactTable = ()=>{
    window.open('http://localhost:5000/api/downloads/zipdata');
  }
  render(){
  return (
    <div className="App">
     <button onClick={this.getReactTable}>React Table</button>
     <button onClick={this.getReactInput}>React Input Field</button>
    </div>
  );
  }
}

export default App;
