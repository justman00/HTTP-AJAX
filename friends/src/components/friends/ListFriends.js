import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";

const ListFriends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => setFriends([...res.data]))
      .catch(err => console.log(err));
  }, []);

  console.log(friends);
  return (
    <>
      <h2>ListFriends</h2>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </>
  );
};

export default ListFriends;
