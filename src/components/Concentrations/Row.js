import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Row extends Component {
  render() {
    return (
      <li><Link to={'/concentrations/' + this.props.name}>{this.props.name}</Link></li>
    )
  }
}

export default Row