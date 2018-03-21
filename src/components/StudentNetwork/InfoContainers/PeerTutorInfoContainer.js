import React, { Component } from 'react'

import { DataConsumer } from '../../Provider/Provider'

class PeerTutorInfoContainer extends Component {
  render() {
    return (
      <DataConsumer>
        {({ "Peer Tutors": Peer_Tutors }) => (
          <div>
            <h1>{this.props.match.params.id}</h1>

            {this.returnInfo(Peer_Tutors, this.props.match.params.id)}
          </div>

        )}
      </DataConsumer>
    )
  }

  returnInfo(Peer_Tutors, id) {
    if (Peer_Tutors) {
      return (
        <div>
          <h2>About</h2>
          <p>{Peer_Tutors[id].About}</p>

          <h2>Reviews</h2>

          <p>Some review here</p>

          <a href="">Schedule an Appointment</a>
        </div>
      )
    }
    return (<p>Loading...</p>)
  }
}



export default PeerTutorInfoContainer