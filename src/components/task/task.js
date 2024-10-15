import { Component } from 'react';
import './task.css';
import { formatDistanceToNow} from "date-fns";
import PropTypes from 'prop-types';

    export default class Task extends Component{
    
        static defaultProps ={
            text: '',
            onDeleted: ()=>{},
            onToggleDone: ()=>{},
            done: false
        }

        static propTypes = {
            text: PropTypes.string,
            onDeleted: PropTypes.func,
            onToggleDone: PropTypes.func,
            done: PropTypes.bool
        }

    
        makeChange = (event) => {
            const { onChange } = this.props;
            const { value } = event.target;
            onChange(value);
          };
        
          doSubmit = (event) => {
            const { onSubmit, id } = this.props;
            event.preventDefault();
            onSubmit(id);
          };

   render() {
        
        const {text, onDeleted,onToggleDone,done,status, isEditing, onEdit, value } = this.props;
        let className = 'description'
        if(done){
            className += ' completed'
        }
        if (isEditing) {
            return (
              <li className="editing">
                <div className="view"> </div>
                <form onSubmit={this.doSubmit}>
                  <input type="text" className="edit" value={value} onChange={this.makeChange} />
                </form>
              </li>
            );
          }
           return (
            <div className='view'>
                <input className='toggle' type="checkbox" checked={done} onChange={onToggleDone}/>
                <label onClick={onToggleDone}>
                    <span className={className} onChange={onToggleDone}>{text}</span>
                    <span className='created' onClick={onToggleDone}>
                        
                          {`created ${formatDistanceToNow(status.toString(), {
                            includeSeconds: true,
                            addSuffix: true,
                          })}`}
                       
                    </span>
                </label>
                <button className='icon icon-edit' onClick={onEdit}></button>
                <button className='icon icon-destroy' onClick={onDeleted}></button>
            </div>
           )
}
}

