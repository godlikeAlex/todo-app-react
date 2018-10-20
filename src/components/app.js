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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Create todo app'),
            this.createTodoItem('Full learn react'),
            this.createTodoItem('Download GTA V')
        ]
    };

    createTodoItem (label){
        return {
            label : label,
            important : false,
            done: false,
            id: this.max++
        };
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
        const newItem = this.createTodoItem(text);

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