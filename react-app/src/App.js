import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import BrowsePage from "./components/BrowsePage";
import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import SinglePin from "./components/SinglePin";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Route exact path='/' component={SplashPage} />
      {isLoaded && (
        <Switch>
          <Route path="/browse">
            <Navigation />
            <BrowsePage isLoaded={isLoaded} />
          </Route>
          <Route path='/pin/:pinId'>
            <Navigation />
            <SinglePin />
          </Route>
          <Route path="/:userName">
            <Navigation />
            <ProfilePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
