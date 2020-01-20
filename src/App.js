import React from 'react';
import './App.css';
import Todolist from './Todolist';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      tasks:[],
      currentTask:{
        text:'',
        key:''
      }
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.taskAdd = this.taskAdd.bind(this);
    this.taskChanged = this.taskChanged.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  inputHandler(e){
    this.setState({
      currentTask:{
        text: e.target.value,
        key: Date.now()
      }
    })
    console.log(this.state)
  }

 taskAdd(e){
   e.preventDefault();
   const newTask = this.state.currentTask;
   if(newTask.text !== ""){
     const task = [...this.state.tasks,newTask];
     this.setState({
       tasks: task,
       currentTask:{
         text:'',
         key:''
       }
     })
     console.log(this.state)
   }
 
 }

 taskChanged(text,key){
   const task = this.state.tasks;
   task.map(taskid=>{
     if(taskid.key===key){
       console.log(taskid.key+" "+key);
       taskid.text = text;
     }
   });
   this.setState({
     tasks: task
   });
 }

 deleteTask(key){
   console.log(key);
  const taskdelete = this.state.tasks;
  taskdelete.splice(key,1);
   this.setState({
     task: taskdelete
   })
 }

  render(){
  
      
   const todolist = (
      <div>
        {this.state.tasks.map((item,key)=>{
          return  <Todolist 
          key={item.key}
          //items={this.state.task}
          value={item.text}
          click={() => this.deleteTask(key)}
          changed={(e)=>this.taskChanged(e.target.value,item.key)}></Todolist>
        })}
        
      </div>
    );
    return(
      <div>
        <h1 className="App">Reactjs To Do Project</h1>
      <div className="main">
        <header>
          <form className="formtd" onSubmit={this.taskAdd}>
            <input type="text" placeholder="Enter Task To do" 
              value={this.state.currentTask.text} 
              onChange={this.inputHandler}/>
              
            <button id="btnAdd" type="submit">Add</button>
          </form>
         <p>{this.state.tasks.text}</p> 
         {todolist}
        </header>
      </div>
      </div>
    );
  }
}

export default App;
