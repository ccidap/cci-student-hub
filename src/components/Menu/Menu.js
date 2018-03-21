import React, { Component } from 'react'
import Tab from './Tab'
import styled from 'styled-components'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuTab>
          <Tab tabName="Home" imgLink="http://via.placeholder.com/50x50" />
          <Tab tabName="Student Network" imgLink="http://via.placeholder.com/50x50" />
          <Tab tabName="Guides" imgLink="http://via.placeholder.com/50x50" />
          <Tab tabName="Events" imgLink="http://via.placeholder.com/50x50" />
          <Tab tabName="Concentrations" imgLink="http://via.placeholder.com/50x50" />
        </MenuTab>
      </div>
    );
  }
}

const MenuTab = styled.ul`
  display: flex;
  list-style:none;
  padding: 0;
  background-color: white;
  height: 75px;
  max-width: 100%;
  bottom: 0;
  position: absolute;
`

export default Menu