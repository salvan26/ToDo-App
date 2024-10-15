import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../fotter";
import './app.css';
import { Component } from "react";
export default class App extends Component {

  maxId = 0;
  state = {
    data: [],
    filter: 'all',
    editInputValue: ''
  };

  deletItem = (id) => {
    
    this.setState(({ data })=> {
      const idx = data.findIndex((el)=> el.id === id);

      const newArray = [
        ...data.slice(0, idx),
        ...data.slice(idx+1)
      ]
      return {
        data: newArray
      }
    })
  }
  
  createTask (text) {
    return {
      text,
      done: false,
      status: new Date(),
      id: this.maxId++,
      isEditing: false,
    }
  }

  addItem = (text) =>{
    const newItem = this.createTask(text);

    this.setState(({ data }) =>{
      const newArr = [
        ...data,
        newItem
      ];
      return {
        data: newArr
      }
    })
    
  };

  editTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const elem = data.find((el) => el.id === id);
      const newElem = {
        ...elem,
        isEditing: !elem.isEditing,
      };

      const newArray = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

      return {
        data: newArray,
        editInputValue: newElem.text,
      };
    });
  };

  editInputValue = (text) => {
    this.setState({
      editInputValue: text,
    });
  };

  changeTask = (id) => {
    const { editInputValue } = this.state;

    if (editInputValue.trim()) {
      this.setState(({ data }) => {
        const index = data.findIndex((el) => el.id === id);
        const elem = data.find((el) => el.id === id);
        const newElem = {
          ...elem,
          text: editInputValue.trim(),
          isEditing: !elem.isEditing,
        };
        const newArray = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
        return {
          data: newArray,
          editInputValue: '',
        };
      });
    }
  };

  onToggleDone  = (id) => {
    this.setState(({data})=>{
      const idx = data.findIndex((el)=> el.id === id);
      const oldTask = data[idx];
      const newTask = {...oldTask,
         done: !oldTask.done };

      const newArray = [
          ...data.slice(0, idx),
          newTask,
          ...data.slice(idx+1)
        ];   

      return {
        data: newArray
      }
    });
  }

  taskFilter(data, filter) {
    if (filter === 'all') {
      return data;
    } else if (filter === 'active') {
      return data.filter((item) => (!item.done));
    } else if (filter === 'completed') {
      return data.filter((item) => item.done);
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ data }) => {
      const tasklits = data.filter(item => !item.done);
      return {
        data: [...tasklits]
      }
    });
  }

  render  (){
    let {data, filter,editInputValue} = this.state
    const doneCount = this.state.data
                      .filter((el) => el.done).length;
    const todoCount = this.state.data.length - doneCount;

    const visibleTasks = this.taskFilter(data, filter);
    return (
      <div>
        <NewTaskForm
        addItem={this.addItem}
        ></NewTaskForm>
        <TaskList data = {visibleTasks}
        onDeleted={this.deletItem}
        onToggleDone={this.onToggleDone}
        onEdit={this.editTask}
        value={editInputValue}
        onChange={this.editInputValue}
        onSubmit={this.changeTask}
        ></TaskList>
        <Footer doneCount={doneCount}
                todoCount={todoCount}
                filter={filter}
                onFilterChange={this.onFilterChange}
                clearCompleted={this.clearCompleted}>  
                </Footer>
      </div>
    );
  };
}
  