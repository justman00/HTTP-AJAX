import React from "react";
import axios from "axios";
import FriendForm from "./FriendForm";

export default function AddFriend(props) {
  const onSubmit = (e, values) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", values)
      .then(() => props.history.push("/"));
  };

  return (
    <>
      <FriendForm onSubmit={onSubmit} title={"Add a new friend"} />
    </>
  );
}
