import React, { useState, useEffect } from "react";
import "./AddForm.css"

const AddForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    ref: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const ref = urlParams.get("ref");

    if (email) {
      setFormData((prevData) => ({ ...prevData, email }));
    }
    if (ref) {
      setFormData((prevData) => ({ ...prevData, ref }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("อีเมลไม่ถูกต้อง");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("เบอร์โทรศัพท์ไม่ถูกต้อง");
      return;
    }

    console.log("Submitted:", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="ref">Ref:</label>
        <br />
        <input
          type="text"
          id="ref"
          name="ref"
          value={formData.ref}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddForm;
