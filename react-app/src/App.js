import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { authenticate } from "./store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import BrowsePage from "./components/BrowsePage";
import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import SinglePin from "./components/SinglePin";
import SingleBoard from "./components/SingleBoard";
import NewPin from "./components/NewPin";
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <ProtectedRoute exact path="/browse">
            <Navigation />
            <BrowsePage isLoaded={isLoaded} />
          </ProtectedRoute>
          <ProtectedRoute exact path='/pin/:pinId'>
            <Navigation />
            <SinglePin />
          </ProtectedRoute>
          <ProtectedRoute exact path='/new-pin'>
            <Navigation />
            <NewPin />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/:userName">
            <Navigation />
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/:userName/:boardId">
            <Navigation />
            <SingleBoard />
          </ProtectedRoute>
          <Route>
            <Navigation />
            <NotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
