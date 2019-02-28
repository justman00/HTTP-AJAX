import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendForm from "./FriendForm";

export default function AddFriend(props) {
  const [val, setVal] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/friends`).then(({ data }) => {
      const rightVal = data.filter(
        obj => obj.id + "" === props.match.params.id
      );
      setVal(...rightVal);
    });
  }, []);

  const onSubmit = (e, values) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${props.match.params.id}`, values)
      .then(() => props.history.push("/"));
  };

  return (
    <>
      <FriendForm
        onSubmit={onSubmit}
        initialValues={val}
        title={"Update your friend"}
      />
    </>
  );
}
