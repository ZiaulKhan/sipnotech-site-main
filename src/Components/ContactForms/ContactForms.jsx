import React from "react";
import "./contactForm.css";

const ContactForms = () => {
  return (
    <div className="sipnotech__contact-forms_container">
      <div className="sipnotech__contact-forms_blueBlur"></div>
      <div className="sipnotech__contact-forms_purpleBlur"></div>
      <div className="sipnotech__contacts-forms_forms-container">
        <p className="sipnotech__contacts-forms_forms-heading">
          Get a free proposal now
        </p>
        <div className="sipnotech__contacts-forms_forms_name-container">
          <label className="sipnotech__contacts-forms_labels">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="sipnotech__contacts-forms_forms_inputs"
          />
        </div>
        <div className="sipnotech__contacts-forms_forms_email-container">
          <label className="sipnotech__contacts-forms_labels">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="sipnotech__contacts-forms_forms_inputs"
          />
        </div>
        <div className="sipnotech__contacts-forms_forms_mobile-container">
          <label className="sipnotech__contacts-forms_labels">Mobile No.</label>
          <input
            type="text"
            placeholder="Enter your Mobile No."
            className="sipnotech__contacts-forms_forms_inputs"
          />
        </div>
        <div className="sipnotech__contacts-forms_forms_message-container">
          <label className="sipnotech__contacts-forms_labels">Message</label>
          <input
            type="text"
            placeholder="Enter your Message"
            className="sipnotech__contacts-forms_forms_inputs sipnotech__contacts-forms_forms_text-message-input"
          />
        </div>
        <button className="sipnotech__contacts-forms_submit-btn">Submit</button>
      </div>
      <div className="sipnotech__contacts-forms_contactBoxes-container">
        <div className="sipnotech__contacts-forms_contactBox">
          <p className="sipnotech__contacts-forms_contactBox_title">
            Phone No.
          </p>
          <p className="sipnotech__contacts-forms_contactBox_text">
            Our customer care is open from Mon-Sat, 09:00 AM to 9:00 PM
          </p>
          <p className="sipnotech__contacts-forms_contactBox_phoneNo">
            +91 70130 03526
          </p>
        </div>

        <div className="sipnotech__contacts-forms_contactBox">
          <p className="sipnotech__contacts-forms_contactBox_title">Email Id</p>
          <p className="sipnotech__contacts-forms_contactBox_text">
            Our support team will get back to you at the earliest
          </p>
          <p className="sipnotech__contacts-forms_contactBox_email">
            info@sipnotech.com
          </p>
        </div>

        <div className="sipnotech__contacts-forms_contactBox">
          <p className="sipnotech__contacts-forms_contactBox_title">Carrer</p>
          <p className="sipnotech__contacts-forms_contactBox_text">
            Kindly share your CV, our HR team will get back to you if any
            requirement suitable for you.
          </p>
          <p className="sipnotech__contacts-forms_contactBox_email">
            info@sipnotech.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
