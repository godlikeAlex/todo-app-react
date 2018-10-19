/*
  Dependencies
 */
import React, { Component } from 'react';

/*
  Components
 */
import Header from './header';
import SearchBar from './search-panel';
import AddTaskForm from './add-task-form';
import TaskList from './todo-list';

class App extends Component {

    max = 12356;

    state = {
        todoData:[
            {label:'Drink Coffee', important:false, id:1},
            {label:'Create todo app', important:true, id:2},
            {label:'Full learn react', important:true, id:3}
        ]
    };

    deleteItem = (id)=>{
      this.setState(({todoData})=>{
          const idx = todoData.findIndex(el => el.id === id);

          const newArray = [
              ...todoData.slice(0,idx),
              ...todoData.slice(idx +1)
          ];


          return {
              todoData: newArray
          }
      });
    };

    onToggleDone = (id)=>{
        console.log('Done',id);
    };

    onToggleImportant = (id)=>{
        console.log('Important',id);
    };

    onItemAdded = (text) => {
        const newItem = {
            label : text,
            important : false,
            id: this.max++
        };

        this.setState(({todoData})=>{
           const newArray = [
               ...todoData,
               newItem
           ];

           return{
               todoData : newArray
           }
        });
    };

    render(){
        return (
            <div className='wrapper'>
                <Header/>
                <SearchBar />
                <TaskList
                    todos={this.state.todoData}
                    onDeleted = {this.deleteItem}
                    onDone = {this.onToggleDone}
                    onImportant = {this.onToggleImportant}
                />
                <AddTaskForm onItemAdded = {this.onItemAdded}/>
            </div>
        )
    }
}


export default App;