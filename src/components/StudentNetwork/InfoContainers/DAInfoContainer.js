import React, { Component } from 'react'

import { DataConsumer } from '../../Provider/Provider'

class DAInfoContainer extends Component {
  render() {
    return (
      <DataConsumer>
        {({ "Dean's Ambassadors": Deans_Ambassadors }) => (
          <div>
            <h1>{this.props.match.params.id}</h1>

            {this.returnInfo(Deans_Ambassadors, this.props.match.params.id)}
          </div>
        )}
      </DataConsumer>
    )
  }

  returnInfo(Deans_Ambassadors, id) {
    if (Deans_Ambassadors) {
      return (
        <div>
          <h2>Role</h2>
          <p>{Deans_Ambassadors[id].Role}</p>

          <h2>About</h2>
          <p>{Deans_Ambassadors[id].About}</p>

          <h2>Concentration</h2>
          <p>{Deans_Ambassadors[id].Concentration}</p>

          <h2>Other Involvement</h2>
          <p>{Deans_Ambassadors["Other Involvement"]}</p>
        </div>
      )
    }
    return (<p>Loading...</p>)
  }
}

export default DAInfoContainer