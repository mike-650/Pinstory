import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import BrowsePage from "./components/BrowsePage";
import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import SinglePin from "./components/SinglePin";
import NewPin from "./components/NewPin";

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
          <ProtectedRoute path="/browse">
            <Navigation />
            <BrowsePage isLoaded={isLoaded} />
          </ProtectedRoute>
          <ProtectedRoute path='/pin/:pinId'>
            <Navigation />
            <SinglePin />
          </ProtectedRoute>
          <ProtectedRoute path='/new-pin'>
            <Navigation />
            <NewPin />
          </ProtectedRoute>
          <ProtectedRoute path="/:userName">
            <Navigation />
            <ProfilePage />
          </ProtectedRoute>
        </Switch>
      )}
    </>
  );
}

export default App;
