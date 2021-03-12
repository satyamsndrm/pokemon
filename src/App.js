import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PokemonList from "./Component/PokemonList";
import Pokemon from "./Component/Pokemon";

// import "./index.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div className="todo">
            <Route exact path="/" component={PokemonList}></Route>
            <Route
              exact
              path="/pokemon/:id"
              component={Pokemon}
            ></Route>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
