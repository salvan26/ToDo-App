import './foter.css';
import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';
const Footer = ({ todoCount, clearCompleted, onFilterChange, filter}) => {

    Footer.defaultProps ={
        todoCount: 0,
        clearCompleted: ()=>{},
        onFilterChange: ()=>{},
        filter: 'all'
    }
    Footer.propTypes ={
        todoCount: PropTypes.number,
        clearCompleted: PropTypes.func,
        onFilterChange: PropTypes.func,
        filter: PropTypes.string
    }
    return (
        <footer className="footer">
          <span className="todo-count">{todoCount}</span>
          <TaskFilter 
                       onFilterChange={onFilterChange}
                       filter={filter}              
                        >
          </TaskFilter>
          <button className="clear-completed"
                  onClick={clearCompleted}
          >
            Clear completed
            </button>
        </footer>
    );
};


export default Footer;