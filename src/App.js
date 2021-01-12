import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";


function App() {

  const [{user}, dispatch] = useStateValue();

  //this is useEffect <<<<<<<< Powerful
  // Piece of code which runs based on given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // message -- user logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else{
        //message -- user loggged out..

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // here we are doing clean-up if anythig changes or render again
    return () => {
      //ANy cleanup operation goes here such as clear the timer,etc.
      unsubscribe();
    }
    
  }, []);   //we left the brackets or (dependency) empty to run the  functions once otherwise if 
           // we put basket inside bracket it will run everytime and going to make computer or 
           //browser slow.

  console.log("User is >>>>> ",user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path="/login">
          <Header />
            <Login />
          </Route>
          {/* This is the default route, */}
          <Route path="/">
            <Header />
            <Home/>
            {/* <h2>HOME PAGE!!</h2> */}
          </Route>
        </Switch>
        </div>
    </Router>
    
    
  );
}

export default App;


/*we need to add React-ROUTER */

    /* localhost.com/ */
    /* localhost.com/checkout */
    /* localhost.com/login */
    
