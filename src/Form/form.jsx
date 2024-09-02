// src/Form.js
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    reasonToLeave: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    reasonToLeave: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.reasonToLeave) {
      newErrors.reasonToLeave = 'reasonToLeave is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.reasonToLeave)) {
      newErrors.reasonToLeave = 'reasonToLeave address is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form data submitted:', formData);
      // You can also reset the form here if needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="reasonToLeave">reasonToLeave:</label>
        <input
          type="reasonToLeave"
          id="reasonToLeave"
          name="reasonToLeave"
          value={formData.reasonToLeave}
          onChange={handleChange}
        />
        {errors.reasonToLeave && <p>{errors.reasonToLeave}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
