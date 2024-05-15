import React from 'react'

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import "../App.css";
function FormComponent() {
  return (
    <div>
        <form className="input_container">
            <div>
              <label>Full Name</label>
              <div className="input_field">
                <PersonOutlineOutlinedIcon />
                <input
                  type="text"
                  className="real_input"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
            </div>

            <div>
              <label>Email</label>
              <div className="input_field">
                <MailOutlinedIcon />
                <input
                  type="text"
                  className="real_input"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>

            <div>
              <label>Password</label>
              <div className="input_field">
                <HelpOutlineOutlinedIcon />
                <input
                  type="password"
                  className="real_input"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
            </div>

            <button className="sign_up" type="submit">
              Sign-Up
            </button>
          </form>
    </div>
  )
}

export default FormComponent