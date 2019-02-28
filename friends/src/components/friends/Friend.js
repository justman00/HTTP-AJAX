import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FriendDiv = styled.div`
  padding: 25px;
  border-top: 1px solid lightgray;
`;

export default function Friend({ name, age, email, id, deleteFriend }) {
  return (
    <FriendDiv>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Email: {email}</h4>
      <Link to={`/edit/${id}`}>Edit a friend</Link>
      <button onClick={() => deleteFriend(id)}>Unfriend Me</button>
    </FriendDiv>
  );
}
