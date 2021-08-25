import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'

class CreateReview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieName: '',
      movieReview: ''
    }

    this.submitReview = this.submitReview.bind(this)
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // componentDidUpdate () {
  // }

  submitReview (e) {
    e.preventDefault()
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    this.setState({
      movieName: '',
      movieReview: ''
    })
    // this.props.history.push('/')
  }

  render () {
    return (
      <div className='container formWrapper'>
        <form onSubmit={this.submitReview}>
          <div className='form-group'>
            <label htmlFor='movieName'>Movie Title</label>
            <input
              type='text'
              onChange={this.handleChange}
              className='form-control'
              name='movieName'
              id='movieName'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='movieReview'>Movie Review</label>
            <textarea
              onChange={this.handleChange}
              name='movieReview'
              className='form-control'
              id='movieReview'
            ></textarea>
          </div>

          <div className='form-group'>
            <input
              type='submit'
              className='btn btn-dark'
              id='submitButton'
              value='SUBMIT'
            />
          </div>
        </form>
        <br></br>
      </div>
    )
  }
}

export default withRouter(CreateReview)
