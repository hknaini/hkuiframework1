import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";


class App extends Component {
  state = {
    table: false,
    f4ip: false,
    input: false,
    tableColumns : ['Student ID', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA'],
    tableAttributesData : [ 'id', 'name', 'age' , 'emailid' , 'work' , 'ola'],
    tableData  : [{selected : false , value : ''}, {selected : false , value : ''},
                  {selected : false , value : ''}, {selected : false , value : ''}, {selected : false , value : ''}, {selected : false , value : ''}]


  };

  getReactTable = () => {
    let that = this ;
    axios.post('http://localhost:5000/api/downloads/zipdatanew', {
     uiState : this.state 
    })
    .then(function (response) {
      console.log(response, ' ho gaya');
       window.open(
       // `http://localhost:5000/api/downloads/zipdata?table=${that.state.table}&&f4ip=${that.state.f4ip}&&ip=${that.state.input}`
        `http://localhost:5000/api/downloads/zipdata?table=true&&f4ip=true&&ip=true`
      );  
      
    })
    .catch(function (error) {
      console.log(' ho gaya errrrrrrrrrrrrr');
      console.log(error);
    });


    

   /*  window.open(
      `http://localhost:5000/api/downloads/zipdatanew`
    ); */
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getReactTable();
  };

  handleCBChange = e => {
    console.log(e.target.checked);
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = e.target.id;
    this.setState({
      [id]: e.target.checked
    });
  };

  createServiceList1 = ()=>{
    const tableColumns = ['Student ID', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA'];
    tableColumns.map((tableColumn, index) =>{
      return(
        <li>
        <input type="checkbox" checked={false}/>
        <input type="text"/>
        </li>
      )

    }
    )

  }

  handleListChange =(index , value)=>{
      let oldTableData = [... this.state.tableData ]
      oldTableData[index].selected = value ;
     // oldTableData[0].value = 'event.target.checked' ;
      this.setState({
        tableData : oldTableData 
      }
      )
      //console.log("gl");
  }

  handleListIPChange =(index , value)=>{
    let oldTableData = [... this.state.tableData ]
    oldTableData[index].value = value ;
   // oldTableData[0].value = 'event.target.checked' ;
    this.setState({
      tableData : oldTableData 
    }
    )
    //console.log("gl");
}

   allitems = function(){
    this.state.tableColumns.map(function(item , index){
    return(
      <li>
      
      <input type="checkbox" checked={true}/>
      <input type="text" value={item}/>
      </li>
    )

  });
}



  render() {
    const tableColumns = ['Student ID', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA'];
    const tableAttributesData= [... this.state.tableAttributesData];
    const tableData= [... this.state.tableData];
   // console.log(tableData);
    const that = this ;
    //console.log(that.state.tableData[0].selected)
    const items = this.state.tableColumns.map((item , index)=>{
      //console.log(index);
      return(
        <li>
         {this.state.tableAttributesData[index]}
        
         <input type="checkbox" onChange={ (event) => {

           this.handleListChange(index , event.target.checked)
         }
           } 
           checked={this.state.tableData[index].selected}/>
        <input type="text" 
        value={this.state.tableData[index].value}
        onChange={ (event) => {
        this.handleListIPChange(index , event.target.value)}
        }
        />
        </li>
      )

    }); 

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
            onChange={this.handleCBChange}
          />
          F4 IP
          <input
            id="f4ip"
            type="checkbox"
            checked={this.state.f4ip}
            onChange={this.handleCBChange}
          />
          Input
          <input
            id="input"
            type="checkbox"
            checked={this.state.input}
            onChange={this.handleCBChange}
          />
        </div>


        <label>
          Pick the service for binding:
          <select>
          <option value="0">Pick a service</option>
            <option value="1">S1_USR_MAINT</option>
            <option value="2">S1_WRH_MAINT</option>
          </select>
        </label>

        <ul>
          {items}
        </ul> 
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
