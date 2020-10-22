import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Posts } from './components/Posts';
import { FetchedPosts } from './components/FetchedPosts';

function App() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to=""
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to="/posts"
            exact
          >
            Posts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/fetchedposts"
            exact
          >
            Fetched Posts
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          path="/posts"
        >
          <Posts />
        </Route>
        <Route
          path="/fetchedposts"
        >
          <FetchedPosts />
        </Route>
      </Switch>
    </>
  );
}

export default App;
