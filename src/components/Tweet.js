import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'


class Tweet extends React.Component {
  render() {
    const {tweet, users, authedUser} = this.props
    return (
      <div class='tweet'>
        <p>{tweet.text}</p>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id]

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  }
}

export default connect(mapStateToProps)(Tweet)
