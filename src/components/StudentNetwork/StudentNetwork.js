import React, { Component } from 'react'
import { DataConsumer } from '../Provider/Provider'
import { Link } from 'react-router-dom'
import NetworkType from './NetworkTypes'

class StudentNetwork extends Component {
  render() {
    return (
      <DataConsumer>
        {({ "Dean's Ambassadors": Deans_Ambassadors, "Peer Tutors": Peer_Tutors, Organizations }) => (
          <div>
            <h1>Student Network</h1>

            {this.returnNetworks(Deans_Ambassadors, Peer_Tutors, Organizations)}
          </div>
        )}
      </DataConsumer>
    )
  }
  returnNetworks(Deans_Ambassadors, Peer_Tutors, Organizations) {
    if (Deans_Ambassadors && Peer_Tutors && Organizations) {
      return (
        <div>
          <TileContainer headerName="Organizations" type={NetworkType.ORG} data={Organizations} />
          <TileContainer headerName="Peer Tutors" type={NetworkType.PEERTUTOR} data={Peer_Tutors} />
          <TileContainer headerName="Dean's Ambassadors" type={NetworkType.DA} data={Deans_Ambassadors} />
        </div>
      )
    } else {
      return (<p>Loading...</p>)
    }
  }
}


const TileContainer = ({ ...props }) => {
  return (
    <div className="tile-container">
      <h2>{props.headerName}</h2>
      <ul>
        {
          props.data && Object.keys(props.data).map(name => {
            return <Tile key={name} type={props.type} name={name} data={props.data[name]} />
          })
        }
      </ul>
    </div>
  )
}

const Tile = ({ ...props }) => {
  return (
    <li><Link to={`/student network/${props.type}/${props.name}`}>{props.name}</Link></li>
  )
}

export default StudentNetwork
