import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {

  state ={
    table : false,
    f4ip : false,
    input : false
}

  getReactTable = ()=>{
    window.open(`http://localhost:5000/api/downloads/zipdata?table=${this.state.table}&&f4ip=${this.state.f4ip}&&ip=${this.state.input}`)
   // window.open('http://localhost:5000/api/downloads/zipdata?v1=23&&v2=33');
  }

  handleSubmit= (e)=>{
      e.preventDefault();
      this.getReactTable();
  }

  handleCBChange =(e) =>{
    console.log(e.target.checked);
   // const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = e.target.id;
       this.setState({
        [id] : e.target.checked
      }) 
  }
  render(){
  return (
     <form onSubmit={this.handleSubmit}>
        <label>
          Pick your UI framework:
     <select>
  <option value="react">React</option>
  <option value="vue">Vue</option>
</select>
</label>
<div>
  Table
<input
            id="table"
            type="checkbox"
            checked={this.state.table}
            onChange={this.handleCBChange} />

            F4 IP
<input
            id="f4ip"
            type="checkbox"
            checked={this.state.f4ip}
            onChange={this.handleCBChange} />

            Input
<input
            id="input"
            type="checkbox"
            checked={this.state.input}
            onChange={this.handleCBChange} />

  </div>

  <button>Submit</button>
</form>
  );
  }
}

export default App;
