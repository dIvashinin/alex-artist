import React from "react";

function ContactPage() {
  // const url = "https://www.instagram.com/alexanderskorobogatov/";
  return (
    <div>
      <h1>here go contacts</h1>
      <p>email: xxxxx@xxxxx.com</p>
      <p>
        <a
          href="https://www.instagram.com/alexanderskorobogatov/"
          className="insta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </p>
      <p>
      code / design by { }
      <a
          href="https://github.com/dIvashinin"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
        DI
        </a>
        </p>

      
      {/* 
      target="_blank" attribute opens the link in a new tab when clicked.
      rel="noopener noreferrer" attribute is added for security reasons when using 
      target="_blank" to prevent potential security vulnerabilities.
      */}
    </div>
  );
}

export default ContactPage;
