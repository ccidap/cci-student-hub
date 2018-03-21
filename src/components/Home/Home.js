import React, { Component } from 'react'
import { DataConsumer } from '../Provider/Provider'

import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <DataConsumer>
        {data => (
          <HomeContainer>
            <div className="header">
              <h1>CCI Student Hub</h1>
              <h3>Powered by the Dean's Ambassadors</h3>
            </div>

            <div className="social-link-container">
              <a className="social-link" href="https://www.facebook.com/cciuncc">Follow our HOCCI spotlights</a>
              <a className="social-link" href="https://www.instagram.com/cciuncc/">Catch behind the scenes footage</a>
              <a className="social-link" href="https://www.youtube.com/channel/UC95gnz0NAQNVQjFSaNVUVsA">View our featured videos</a>
            </div>

            <div className="updates-container">
              <h2>Latest Updates</h2>
              {/* TODO Figure out latest updates */}
            </div>
          </HomeContainer>
        )}
      </DataConsumer>
    )
  }
}

const HomeContainer = styled.div`
  background: #80CBC4;
`

export default Home