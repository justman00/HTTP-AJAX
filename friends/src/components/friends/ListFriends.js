import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";

const ListFriends = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => setFriends([...res.data]))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>ListFriends</h2>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          setFriends={setFriends}
          friends={friends}
          {...friend}
        />
      ))}
    </>
  );
};

export default ListFriends;
