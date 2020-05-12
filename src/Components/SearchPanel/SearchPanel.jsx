import React, { Component } from 'react'
import './searchPanel.scss'
import StatusFilter from '../ItemStatusFilter/StatusFilter'

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }
  render() {
    return (
        <div className="input-group">
          <input type="text"
                 className="form-control search-line"
                 placeholder="Type to search"
                 value={this.state.term}
                 onChange={this.onSearchChange}
          />
        </div>
    )
  }
}
