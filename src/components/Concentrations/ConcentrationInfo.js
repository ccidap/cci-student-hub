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
        <Info
          name={id}
          concentration={Concentrations[id]} />
      )
    } else {
      return (<p>Loading...</p>)
    }
  }
}

const Info = ({ ...props }) => {
  return (
    <div>
      <h2>Department</h2>
      <h3>{props.concentration.Department}</h3>

      <h2>About</h2>
      <h3>{props.concentration.About}</h3>

      <a href={props.concentration.Link}>Learn More</a>
    </div>
  )
}


export default ConcentrationInfo