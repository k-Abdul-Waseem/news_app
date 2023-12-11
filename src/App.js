import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

//type rcc to get below class component
export default class App extends Component {
  pageSize = 6;

  apiKey = "b01822393fe145f9b45b65880b795c3c";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="general"
                apiKey={this.apiKey}
                key="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="business"
                apiKey={this.apiKey}
                key="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
                apiKey={this.apiKey}
                key="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="general"
                apiKey={this.apiKey}
                key="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="health"
                apiKey={this.apiKey}
                key="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="science"
                apiKey={this.apiKey}
                key="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="sports"
                apiKey={this.apiKey}
                key="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                category="technology"
                apiKey={this.apiKey}
                key="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
