import React from 'react'
import { connect } from 'react-redux'


class NewTweet extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    //add tweet to the store
    console.log('New Tweet: ', text);
    this.setState(() => ({ text: ''}))
  }

  render() {
    const { text } = this.state
    const tweetLeft = 280 - text.length
    {/*  todo: Redirect to the / if submit */}

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form
          className="new-tweet"
          onSubmit={this.handleSubmit}>
            <textarea
              placeholder='Whats happening?'
              value={text}
              onChange={this.handleChange}
              className='textarea'
              maxLength={280}
            />
            {tweetLeft <= 100 && (
              <div className="tweet-length">
                {tweetLeft}
              </div>
            )}
            <button
              className="btn"
              type='submit'
              disabled={text === ''}>
                Submit
              </button>
          </form>
      </div>
    )
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(mapStateToProps)(NewTweet)
