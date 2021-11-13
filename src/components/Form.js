import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  })

  /*
  function handleFirstNameChange(event) {
    // setFirstName(event.target.value);

    // formData is an object, so we need to copy all the key/value pairs
    // we want to overwrite the firstName key with a new value
    setFormData({ ...formData, firstName: event.target.value })
  }

  function handleLastNameChange(event) {
    // setLastName(event.target.value);
    setFormData({ ...formData, lastName: event.target.value })
  }
  */

  // the first input, event.target.name is set to firstName, while in the second input, it is set to lastName. 
  // Each input's name attribute will change which part of state is actually updated!
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name
    let value = event.target.value

    // use 'checked' property of checkboxes instead of 'value'
    if (event.target.type === "checkbox") {
      value = event.target.checked
    }

    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  // If we give our inputs name attributes, we can access them as event.target.name
  // If we make sure the name attributes of our <input> fields match keys in our state, we can write a generic handleChange function
  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" onChange={handleFirstNameChange} value={firstName} /> */}
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      {/* <input type="text" onChange={handleLastNameChange} value={lastName} /> */}
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;