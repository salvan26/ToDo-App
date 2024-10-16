import './task-filter.css';
import PropTypes from 'prop-types';

const filterButtons = [
  { name: 'all', text: 'All' },
  { name: 'active', text: 'Active' },
  { name: 'completed', text: 'completed' },
];
function TaskFilter({ filter, onFilterChange }) {
  const buttons = filterButtons.map(({ name, text }) => {
    const isActive = name === filter;
    const classNames = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;

    return (
      <li key={name}>
        <button key={name} type="button" onClick={() => onFilterChange(name)} className={classNames}>
          {text}
        </button>
      </li>
    );
  });
  TaskFilter.defaultProps = {
    filter: 'all',
    onFilterChange: () => {},
  };

  TaskFilter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  };
  return <ul className="filters">{buttons}</ul>;
}

export default TaskFilter;
