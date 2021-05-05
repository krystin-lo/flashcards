import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Home from "../Home";
import StudyPage from "../deck/Study/StudyPage";
import NotFound from "./NotFound";
import Header from "./Header";
import EditDeck from "../deck/EditDeck";
import View from "../deck/View";
import EditCard from "../Card/EditCard";
import CreateCard from "../Card/CreateCard";
import CreateDeck from "../deck/CreateDeck";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks/:deckId">
            <View />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;