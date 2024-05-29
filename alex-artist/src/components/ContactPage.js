import React from "react";

function ContactPage() {
  const url = "https://www.instagram.com/alexanderskorobogatov/";
  return (
    <div>
      here go contacts
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
      <p>code / design by DI</p>
      {/* 
      target="_blank" attribute opens the link in a new tab when clicked.
      rel="noopener noreferrer" attribute is added for security reasons when using 
      target="_blank" to prevent potential security vulnerabilities.
      */}
    </div>
  );
}

export default ContactPage;
