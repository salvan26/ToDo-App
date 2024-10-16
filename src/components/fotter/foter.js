import './foter.css';
import PropTypes from 'prop-types';

import TaskFilter from '../task-filter';

function Footer({ todoCount, clearCompleted, onFilterChange, filter }) {
  Footer.defaultProps = {
    todoCount: 0,
    clearCompleted: () => {},
    onFilterChange: () => {},
    filter: 'all',
  };
  Footer.propTypes = {
    todoCount: PropTypes.number,
    clearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
  };
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount}</span>
      <TaskFilter onFilterChange={onFilterChange} filter={filter} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
