import React, { Component } from 'react'
import ReviewDetails from './ReviewDetails'

class ReviewList extends Component {
  _isMounted = false

  constructor (props) {
    super(props)

    this.state = {
      reviews: null
    }
  }

  fetchingData () {
    this._isMounted = true

    fetch('/getMovieReviews')
      .then(res => res.json())
      .then(body => {
        if (this._isMounted) {
          this.setState({ reviews: body })
        }
      })
  }

  componentDidMount () {
    this.fetchingData()
  }

  componentDidUpdate () {
    this.fetchingData()
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    return (
      <>
        {this.state.reviews ? (
          this.state.reviews.map(review => {
            return <ReviewDetails key={review.id} review={review} />
          })
        ) : (
          <p>No reviews available atm</p>
        )}
      </>
    )
  }
}

export default ReviewList
