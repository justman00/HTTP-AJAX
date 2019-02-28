import React from "react";
import styled from "styled-components";
import axios from "axios";

const FriendDiv = styled.div`
  padding: 25px;
  border-top: 1px solid lightgray;
`;

export default function Friend({ name, age, email, id, friends, setFriends }) {
  return (
    <FriendDiv>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Email: {email}</h4>
      <button
        onClick={() => {
          axios.delete(`http://localhost:5000/friends/${id}`).then(() => {
            const newFriends = friends.filter(frd => frd.id !== id);
            setFriends(newFriends);
          });
        }}
      >
        Unfriend Me
      </button>
    </FriendDiv>
  );
}
