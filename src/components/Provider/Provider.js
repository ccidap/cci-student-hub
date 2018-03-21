import React from 'react'
import createReactContext from 'create-react-context'
import firebase from '../../firebase.js'

const DataContext = createReactContext()

class Provider extends React.Component {
  state = { data: {} }

  render() {
    return (
      <DataContext.Provider value={this.state.data}>
        {this.props.children}
      </DataContext.Provider>
    )
  }

  componentDidMount() {
    const ref = firebase.database().ref()

    ref.once('value', (snapshot) => {
      const data = snapshot.val()

      this.setState({
        data: data
      })

    })
  }
}

export default Provider
export const DataConsumer = DataContext.Consumer