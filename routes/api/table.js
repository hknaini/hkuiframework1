import React, { Component } from 'react'
import Hkreacttable from 'hktestnpmone';

class App extends Component {
  render() {
    return (
        <Hkreacttable 
        tableColumns = {['Student ID', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA']}
        tableColumnTypes = {['txt','btn','ip','txt','ip','txts']}
        tableData={
          [
            { id: 1, name: 'Himanshu', age: 221, emailid: 'Himanshu@email.com' , work : 'WRK1' , ola: "OLA1"},
            { id: 2, name: 'Pavan', age: 129, emailid: 'Pavan@email.com' , work : 'WRK2' , ola: "OLA2"},
            { id: 3, name: 'Anshul', age: 126, emailid: 'Anshul@email.com', work : 'WRK3' , ola: "OLA3" },
            { id: 4, name: 'Bindu', age: 225, emailid: 'Bindu@email.com' , work : 'WRK4' , ola: "OLA4"}  ,
            { id: 5, name: 'Bindu', age: 2254, emailid: 'HBindu@email.com' , work : 'WRK5' , ola: "OLA5"}  
         ]
        }/>
    );
  }
}

export default App
