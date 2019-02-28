import React from "react";
import ListFriends from "./friends/ListFriends";
import { Route } from "react-router-dom";
import AddFriend from "./friends/AddFriend";
import UpdateFriend from "./friends/UpdateFriend";

const App = () => {
  return (
    <>
      <Route exact path="/" component={ListFriends} />
      <Route path="/create" component={AddFriend} />
      <Route path="/edit/:id" component={UpdateFriend} />
    </>
  );
};

export default App;
