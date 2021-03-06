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
        ],
        term : ''
    };

    toggleProperty(arr,id, propName) {
        const idx = arr.findIndex(el => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    };

    search (items,term){
        if(this.state.term.length === 0){
            return items;
        }

        return items.filter(item =>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
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
        this.setState(({ todoData })=>{
            return {
                todoData: this.toggleProperty(todoData,id,'done')
            };
        });

        console.log(this.state.todoData);
    };

    onToggleImportant = (id)=>{
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData,id,'important')
            }
        });
    };

    searchTask = (label) =>{
        this.setState({
            term : label
        })
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
        const {todoData,term} = this.state;
        const visibleItems = this.search(todoData,term);
        const doneCount = todoData.filter(el=> el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='wrapper'>
                <Header todo={todoCount} done={doneCount} />
                <SearchBar
                    searchTask = {this.searchTask}
                />
                <TaskList
                    todos={visibleItems}
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