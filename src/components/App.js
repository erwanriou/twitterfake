import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

class App extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <NewTweet />}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
