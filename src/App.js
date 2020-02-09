import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VideoPlayer from "./pages/video/VideoPlay";
import Home from "./pages/home/Home";
import { render } from "@testing-library/react";
import Admin from "./pages/admin/Admin.js"
export default function App() {
  return (
      <Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/video/:mId" component ={VideoPlayer}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </Router>
    );
};