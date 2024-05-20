
import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    question1: '',
    question2: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.age) errors.age = 'Age is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.question1) errors.question1 = 'Answer to question 1 is required';
    if (!formData.question2) errors.question2 = 'Answer to question 2 is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div>
      <h2>Survey Form</h2>
      {isSubmitted ? (
        <div>Survey Submitted Successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {formErrors.age && <span>{formErrors.age}</span>}
          </div>
          <div>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formErrors.gender && <span>{formErrors.gender}</span>}
          </div>
          <div>
            <label>Question 1: How did you hear about us?</label>
            <select
              name="question1"
              value={formData.question1}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="internet">Internet</option>
              <option value="friend">Friend</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
            {formErrors.question1 && <span>{formErrors.question1}</span>}
          </div>
          <div>
            <label>Question 2: How satisfied are you with our service?</label>
            <select
              name="question2"
              value={formData.question2}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="very_satisfied">Very Satisfied</option>
              <option value="satisfied">Satisfied</option>
              <option value="neutral">Neutral</option>
              <option value="dissatisfied">Dissatisfied</option>
              <option value="very_dissatisfied">Very Dissatisfied</option>
            </select>
            {formErrors.question2 && <span>{formErrors.question2}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
