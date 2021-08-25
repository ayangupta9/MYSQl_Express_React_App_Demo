import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Customers from './components/CreateReview'
import Navbar from './components/Navbar'
import ReviewList from './components/ReviewList'

function App () {
  return (
    <BrowserRouter>
        <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Customers} />
          <Route exact path='/reviews' component={ReviewList} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
