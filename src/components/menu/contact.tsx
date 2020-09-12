import React from "react"
import Mail from "../../assets/icons/mail"

import "../../styles/contact.scss"

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form>
        <label
          onClick={e => {
            e.preventDefault()
          }}
          htmlFor="name"
          className="label"
        >
          Name
        </label>
        <input className="input-text" type="text" name="name" id="name" />
        <label
          onClick={e => {
            e.preventDefault()
          }}
          htmlFor="email"
          className="label"
        >
          Email
        </label>
        <input className="input-text" type="email" name="email" id="email" />
        <label
          onClick={e => {
            e.preventDefault()
          }}
          htmlFor="message"
          className="label"
        >
          Message
        </label>
        <div className="message-area-container">
          <textarea className="input-text input-text-box" name="message" id="message" />
          <button type="submit" className="send-button">
            <Mail color={"white"} size={30} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
