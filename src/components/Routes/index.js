import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Provider from '../Provider/Provider'

import Home from '../Home/Home'
import PeetTutorInfoContainer from '../StudentNetwork/InfoContainers/PeerTutorInfoContainer'
import OrgInfoContainer from '../StudentNetwork/InfoContainers/OrgInfoContainer'
import DAInfoContainer from '../StudentNetwork/InfoContainers/DAInfoContainer'
import StudentNetwork from '../StudentNetwork/StudentNetwork'
import NetworkTypes from '../StudentNetwork/NetworkTypes'
import Guides from '../Guides/Guides'
import Events from '../Events/Events'
import ConcentrationInfo from '../Concentrations/ConcentrationInfo';
import Concentrations from '../Concentrations/Concentrations'
import Menu from '../Menu/Menu'

export default () => {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path={`/student network/${NetworkTypes.PEERTUTOR}/:id`} component={PeetTutorInfoContainer} />
            <Route path={`/student network/${NetworkTypes.ORG}/:id`} component={OrgInfoContainer} />
            <Route path={`/student network/${NetworkTypes.DA}/:id`} component={DAInfoContainer} />
            <Route path="/student network" component={StudentNetwork} />
            <Route path="/guides" component={Guides} />
            <Route path="/events" component={Events} />
            <Route path="/concentrations/:id" component={ConcentrationInfo} />
            <Route path="/concentrations" component={Concentrations} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Menu />
        </div>
      </BrowserRouter>
    </Provider>
  );
}