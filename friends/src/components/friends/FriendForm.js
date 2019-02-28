import React, { useState, useEffect } from "react";

export default function FriendForm({
  onSubmit,
  initialValues = { name: "", age: "", email: "" },
  title
}) {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({ ...initialValues });
  }, [initialValues.name]);

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={e => onSubmit(e, values)}>
      <h1>{title}</h1>
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
