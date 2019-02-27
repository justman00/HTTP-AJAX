import React from "react";
import styled from "styled-components";

const FriendDiv = styled.div`
  padding: 25px;
  border-top: 1px solid lightgray;
`;

export default function Friend({ name, age, email }) {
  return (
    <FriendDiv>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Email: {email}</h4>
    </FriendDiv>
  );
}
