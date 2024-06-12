import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <form className="Form_child">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="number">Number:</label>
          <input type="tel" id="number" name="number" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="image-section">
        <div className="school-name">RAJIV <br/> Public School</div>
      </div>
    </div>
  );
};

export default Form;