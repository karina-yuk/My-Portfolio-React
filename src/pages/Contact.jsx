import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container py-4 mb-4">
      <h1 className="text-center text-black mb-4">Contact Us</h1>
      <p className="px-1">
        Unfortunately, the form feature is unavailable at the moment.
        However, you can reach out to me directly by sending an email to:{" "}
        <a href="mailto:karina.yukting.li@gmail.com" 
        style={{textDecoration: "none", color: "black", backgroundColor: "#d3c4be", padding: "10px", borderRadius: "20px"}}>
          karina.yukting.li@gmail.com
        </a>
      </p>{" "}
      {/* Note to self: remove this when the form feature is available */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && "is-invalid"}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message && "is-invalid"}`}
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary"
        style={{color: "black", backgroundColor: "#d3c4be", padding: "10px", borderRadius: "10px", border: "none"}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
