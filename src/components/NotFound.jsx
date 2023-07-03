import React from 'react';
import notfound from "../images/notfound.svg";

const NotFound = () => {
  return (

        <div className="container">
        <h2 className="title">ไม่พบหน้าเว็บ (404 Page Not Found)</h2>
        <img src={notfound} alt="not found" />
      </div>
  )
}

export default NotFound