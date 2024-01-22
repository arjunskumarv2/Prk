"use client"
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 mt-10 bg-white rounded-lg shadow-md md:p-4">
      {/* Left side (text) */}
      <div className="w-full md:w-1/2 px-4 md:px-10 border-r mb-4 md:mb-0">
        <div className="mb-6">
          <h1 className="heading_text">Drop us a Message for any Query</h1>
          <p className="para">
            If you prefer to send us a message through our website, you can use our contact form. Simply fill out the required fields and hit "submit." We'll respond to your inquiry as soon as possible.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MdLocationOn size={'24px'} color="#F39101" />
            <div>
              <h1 className="subheading_text">Office</h1>
              <p>134/2. 1st floor, RM Square, K.Channasandra,
                <br className="max-md:hidden" />
                <span> Whitefield, Bangalore - 560067 </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MdCall size={'24px'} color="#F39101" />
            <div>
              <h1 className="subheading_text">Mobile</h1>
              <p>+91 81979 98550</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail size={'24px'} color="#F39101" />
            <div>
              <h1 className="subheading_text">Email</h1>
              <p>support@prkglobal360.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full md:w-2/3">
          <label htmlFor="Name" className="form_textarea">
            Name
          </label>
          <input type="text" id="first_name" className="form_input" />

          <label htmlFor="Email" className="form_textarea">
            Email
          </label>
          <input type="text" id="Email" className="form_input" />

          <label htmlFor="Phone Number" className="form_textarea">
            Phone Number
          </label>
          <input type="text" id="Phone_Number" className="form_input" />

          <label htmlFor="Subject" className="form_textarea">
            Your Company
          </label>
          <input type="text" id="Subject" className="form_input" />

          <label htmlFor="Message" className="form_textarea">
            Message
          </label>
          <textarea type="text" id="Message" className="form_input" rows="4" />

          <button className="orange_btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
