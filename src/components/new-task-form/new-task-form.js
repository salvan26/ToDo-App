import { Component } from 'react';
import './new-task-form.css';
export  default class NewTaskForm extends Component  {

    static defaultProps ={
        
    }
    
    state = {
      text: ''  
    }
    onLabelChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })
    }
    render()  {
    return (
        <section className="todoapp">
            <form className="header"
                    onSubmit={this.onSubmit}>
                <h1>Todos</h1>
                <input className="new-todo" placeholder="what needs to be done?" autoFocus 
                onChange={this.onLabelChange}
                value={this.state.text}
      />
            </form>
        </section>
    );
};
}



