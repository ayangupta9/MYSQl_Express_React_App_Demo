import React from 'react'

function ReviewDetails ({ review }) {
  const movieName = review.movieName
  const movieReview = review.movieReview

  function deleteReview () {
    fetch('/deleteReview', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: review.id })
    })
  }

  return (
    <div className='reviewDetailsWrapper'>
      <div onClick={deleteReview} className='closeBtn'>
        <i className='fas fa-times'></i>
      </div>
      <h3 id='movieTitle'>{movieName}</h3>
      <p id='movieReview'>{movieReview}</p>
    </div>
  )
}

export default ReviewDetails
