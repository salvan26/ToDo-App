import './task-list.css';
import Task from '../task';
import PropTypes from 'prop-types';

const TaskList = ({data, onDeleted,
                onToggleDone,onEdit, onChange, onSubmit,value}) => {
                         
        const elements =  data.map((item) => {
       
            const { id, className,status,isEditing, ...itemProps} = item
            return (
                <li key = {id} className = {className} >
                    <Task {...itemProps} 
                    onDeleted={() => onDeleted(id)} 
                    status={status}
                    onToggleDone={() => onToggleDone(id)}
                    onEdit={()=> onEdit(id)}
                    value={value}
                    isEditing={isEditing}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    id={id}
                    />
                </li>
            );
        })
    TaskList.defaultProps ={
        onDeleted: ()=>{},
        onToggleDone: ()=>{},
        data: [{}]
    }
    TaskList.propTypes ={
        onDeleted: PropTypes.func,
        onToggleDone:  PropTypes.func,
        data: PropTypes.arrayOf(PropTypes.object)
    }
    return (

        <section className='main'>
            <ul className='todo-list'>
            {elements}
            </ul>
        </section>
    )
}

export default TaskList;
