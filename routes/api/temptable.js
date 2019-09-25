import React, { Component } from 'react'
import Hkreacttable from 'hktestnpmone'
class App extends Component {
render() {
return (
<Hkreacttable
tableColumns = {['Student ID', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA']}
tableColumnTypes = {['txt','btn','ip','txt','ip','txts']}
tableData={
[
{ id: 1, name: 'Himanshu', age: 221, emailid: 'Himanshu@email.com' , work : 'WRK1' , ola: 'OLA1'},{ id: 2, name: 'Pavan', age: 129, emailid: 'Pavan@email.com' , work : 'WRK2' , ola: 'OLA2'},{ id: 3, name: 'Anshul', age: 126, emailid: 'Anshul@email.com', work : 'WRK3' , ola: 'OLA3' }
]
}
/>
);
}
}