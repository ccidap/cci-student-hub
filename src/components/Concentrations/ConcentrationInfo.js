import React, { Component } from 'react'
import { DataConsumer } from '../Provider/Provider'

class ConcentrationInfo extends Component {
  render() {
    return (
      <DataConsumer>
        {({ Concentrations }) => (
          <div>
            <h1>{this.props.match.params.id}</h1>

            {this.returnConcentrations(Concentrations, this.props.match.params.id)}
          </div>
        )}
        }
      </DataConsumer>
    )
  }

  returnConcentrations(Concentrations, id) {
    if (Concentrations) {
      return (
        <div>
          <h2>Department</h2>
          <h3>{Concentrations[id].Department}</h3>

          <h2>About</h2>
          <h3>{Concentrations[id].About}</h3>

          <a href={Concentrations[id].Link}>Learn More</a>
        </div>
      )
    } else {
      return (<p>Loading...</p>)
    }
  }
}


export default ConcentrationInfo