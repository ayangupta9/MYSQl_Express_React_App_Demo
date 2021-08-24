const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/add', (req, res) => {
  console.log('add called')
  const sqlInsert =
    'INSERT INTO mern_movie_reviews (movieName, movieReview) VALUES (?,?)'
  db.getConnection((err, connection) => {
    if (err) throw err
    console.log('Made connection')
    connection.query(
      sqlInsert,
      [req.body.movieName, req.body.movieReview],
      (err, result) => {
        connection.release()
        console.log(result)
        if (err) throw err
      }
    )
  })
})

app.delete('/deleteReview', (req, res) => {
  const id = req.body.id
  const sqlDelete = 'DELETE FROM mern_movie_reviews WHERE id=?'
  db.getConnection((err, connection) => {
    if (err) throw err
    connection.query(sqlDelete, [id], (error, result) => {
      connection.release()
      if (error) throw error
      console.log(result)
    })
  })
})

app.get('/getMovieReviews', (req, res) => {
  const sqlGet = 'SELECT * FROM mern_movie_reviews'
  db.query(sqlGet, (err, result) => {
    res.json(result)
  })
})

app.listen(5000, () => {
  console.log('Server ready')
})
