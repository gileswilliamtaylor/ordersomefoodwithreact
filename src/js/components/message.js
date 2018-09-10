import React from 'react'


const Message = ({ lead, message }) => {
  let leadText,
    messageText

  if (lead) {
    leadText = <p className="message-lead" id="message-lead">{lead}</p>
  }

  if (message) {
    messageText = <p className="message" id="message">{message}</p>
  }

  return (
    <div className="message-container" id="message-container">
      <div className="message-box">
        {leadText}
        {messageText}
        <button type="button" className="message-button" id="message-button" aria-label="Close Message">OK</button>
      </div>
    </div>
  )
}

export default Message
