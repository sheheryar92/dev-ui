import React from "react";
import "../App.css";

function SocialMedia() {
  return (
    <div className="social_icons">
      <img src="/images/google.png" alt="google" width={40} height={40}  className="social_hover"/>

      <img src="/images/facebook.png" alt="fb" width={40} height={40}  className="social_hover"/>

      <img src="/images/apple.png" alt="apple" width={40} height={40}  className="social_hover"/>
    </div>
  );
}

export default SocialMedia;
