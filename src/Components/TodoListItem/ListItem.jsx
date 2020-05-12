import React, {Component} from 'react'
import './listItem.scss'

export default class TodoListItem extends Component {

  render() {
    const {label, onDeleted, onToggleDone, onToggleImportant, important, done} = this.props

    let classNames = 'todo-list-item'
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }

    return (
        <span className='todo-list-item'
        >
          <span
              className = {classNames}
              onClick={ onToggleDone }
          >{label}
          </span>
          <div className='group-btn'>
            <button
                type='button'
                className='btn btn-outline-success btn-sm btn-item'
                onClick={ onToggleImportant }
            > <i className="fa fa-exclamation"/></button>
            <button
                type='button'
                className='btn btn-outline-danger btn-sm btn-item'
                onClick={onDeleted }
            > <i className="fa fa-trash-o"/>
          </button>
          </div>
        </span>
    )
  }
}
