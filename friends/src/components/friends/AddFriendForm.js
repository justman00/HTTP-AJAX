import React, { useState } from "react";
import axios from "axios";

export default function AddFriendForm(props) {
  const [values, setValues] = useState({ name: "", age: "", email: "" });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", values)
      .then(() => props.history.push("/"));
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>hi</h1>
      <input type="text" name="name" value={values.name} onChange={onChange} />
      <input type="text" name="age" value={values.age} onChange={onChange} />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
