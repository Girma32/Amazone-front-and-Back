import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';




const promise = loadStripe(
  'pk_test_51KhiYmFpYoYo8YjhENMCrBvt3qFYmn7ZuA8LgnTPC41SVEQMPK7ecWOvoG5l0jCc6Go2fuwR0Vlyy5eRTsq6Tth800tfJ3sG9h');


function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // dynamic if statment on react
      // console.log("the user is", authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements >
          </Route>
          <Route path='/checkout'>
            <Header />
            <CheckOut />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
