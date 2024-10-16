import React from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../fotter';

import './app.css';

export default class App extends React.Component {
  state = {
    data: [],
    filter: 'all',
    editInputValue: '',
  };

  getTaskId = () => Math.floor(Math.random() * 1000);

  deletItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);

      const newArray = [...data.slice(0, idx), ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTask(text);

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
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

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldTask = data[idx];
      const newTask = { ...oldTask, done: !oldTask.done };

      const newArray = [...data.slice(0, idx), newTask, ...data.slice(idx + 1)];

      return {
        data: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ data }) => {
      const tasklits = data.filter((item) => !item.done);
      return {
        data: [...tasklits],
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  taskFilter(data, filter) {
    if (filter === 'all') {
      return data;
    }
    if (filter === 'active') {
      return data.filter((item) => !item.done);
    }
    if (filter === 'completed') {
      return data.filter((item) => item.done);
    }
    return [];
  }

  createTask(text) {
    return {
      text,
      done: false,
      status: new Date(),
      id: this.getTaskId(),
      isEditing: false,
    };
  }

  render() {
    const { data, filter, editInputValue } = this.state;
    const doneCount = data.filter((el) => el.done).length;
    const todoCount = data.length - doneCount;

    const visibleTasks = this.taskFilter(data, filter);
    return (
      <div>
        <NewTaskForm addItem={this.addItem} />
        <TaskList
          data={visibleTasks}
          onDeleted={this.deletItem}
          onToggleDone={this.onToggleDone}
          onEdit={this.editTask}
          value={editInputValue}
          onChange={this.editInputValue}
          onSubmit={this.changeTask}
        />
        <Footer
          doneCount={doneCount}
          todoCount={todoCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
