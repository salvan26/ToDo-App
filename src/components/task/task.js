import { Component } from 'react';
import './task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
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
    const { text, onDeleted, onToggleDone, done, status, isEditing, onEdit, value } = this.props;
    let className = 'description';
    if (done) {
      className += ' completed';
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
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
        <label onClick={onToggleDone}>
          <span className={className} onChange={onToggleDone}>
            {text}
          </span>
          <span className="created">
            {`created ${formatDistanceToNow(status.toString(), {
              includeSeconds: true,
              addSuffix: true,
            })}`}
          </span>
        </label>
        <button className="icon icon-edit" type="button" onClick={onEdit} aria-label="Edit" />
        <button className="icon icon-destroy" type="button" onClick={onDeleted} aria-label="Edit" />
      </div>
    );
  }
}
Task.defaultProps = {
  text: '',
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
};

Task.propTypes = {
  text: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
};
