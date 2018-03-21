import React, { Component } from 'react'

import { DataConsumer } from '../../Provider/Provider'

class OrgInfoContainer extends Component {
  render() {
    return (
      <DataConsumer>
        {({ Organizations }) => (

          <div>
            <h1>{this.props.match.params.id}</h1>

            {this.returnInfo(Organizations, this.props.match.params.id)}
          </div>

        )}
      </DataConsumer>
    )
  }

  returnInfo(Organizations, id) {
    if (Organizations) {
      return (
        Object.keys(Organizations[id]).map(domain => {
          if (domain !== "About" && Organizations[id][domain]) {
            return <OrgInfo key={domain} domain={domain} link={Organizations[id][domain]} />
          } else {
            return <OrgInfo key={domain} domain={domain} about={Organizations[id][domain]} />
          }
        })
      )
    } else {
      return (<p>Loading...</p>)
    }
  }
}

const OrgInfo = ({ ...props }) => {
  return (
    <div>
      <h2>{props.domain}</h2>
      {
        props.link ? <a href={props.link}>{props.link}</a> : <p>{props.about}</p>
      }
    </div>
  )
}


export default OrgInfoContainer