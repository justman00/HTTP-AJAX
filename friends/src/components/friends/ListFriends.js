import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";
import { Link } from "react-router-dom";

const ListFriends = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => setFriends([...res.data]))
      .catch(err => console.log(err));
  }, []);

  console.log(friends);

  const deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(() => {
      const newFriends = friends.filter(frd => frd.id !== id);
      setFriends(newFriends);
    });
  };

  return (
    <>
      <h2>ListFriends</h2>
      <Link to="/create">Add a new Friend</Link>
      {friends.map(friend => (
        <Friend key={friend.id} deleteFriend={deleteFriend} {...friend} />
      ))}
    </>
  );
};

export default ListFriends;
