import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Tab extends Component {
  render() {
    return (
      <TabItem> <Link to={"/" + this.props.tabName.toLowerCase()}>{this.props.tabName}<img alt={this.props.tabName + ' image'} src={this.props.imgLink} /> </Link> </TabItem>
    )
  }
}

const TabItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex-grow: 1;
  background: white;
  border: 1px solid white;
`

export default Tab