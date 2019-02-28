import React from "react";
import ListFriends from "./friends/ListFriends";
import { Route } from "react-router-dom";
import AddFriendForm from "./friends/AddFriendForm";

const App = () => {
  return (
    <>
      <Route exact path="/" component={ListFriends} />
      <Route path="/create" component={AddFriendForm} />
    </>
  );
};

export default App;
