import React, { Component } from 'react'
import { DataConsumer } from '../Provider/Provider'

import Row from './Row'

class Concentrations extends Component {
  render() {
    return (
      <DataConsumer>
        {({ Concentrations }) => (
          <div>
            <h1>Concentrations</h1>

            {this.returnConcentrations(Concentrations)}
          </div>
        )}
      </DataConsumer>
    )
  }
  returnConcentrations(Concentrations) {
    if (Concentrations) {
      return (
        <ul>
          {
            Concentrations && Object.keys(Concentrations).map(name => {
              return <Row key={name} name={name} />
            })
          }
        </ul>
      )
    } else {
      return (<p>Loading...</p>)
    }
  }
}

export default Concentrations