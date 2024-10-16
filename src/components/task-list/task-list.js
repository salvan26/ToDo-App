import './task-list.css';
import PropTypes from 'prop-types';

import Task from '../task';

function TaskList({ data, onDeleted, onToggleDone, onEdit, onChange, onSubmit, value }) {
  const elements = data.map((item) => {
    const { id, className, status, isEditing, text, done } = item;
    return (
      <li key={id} className={className}>
        <Task
          done={done}
          text={text}
          onDeleted={() => onDeleted(id)}
          status={status}
          onToggleDone={() => onToggleDone(id)}
          onEdit={() => onEdit(id)}
          value={value}
          isEditing={isEditing}
          onChange={onChange}
          onSubmit={onSubmit}
          id={id}
        />
      </li>
    );
  });
  TaskList.defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    data: [{}],
  };
  TaskList.propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        status: PropTypes.instanceOf(Date),
        isEditing: PropTypes.bool,
        isCompleted: PropTypes.bool,
      })
    ),
  };
  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
}

export default TaskList;
