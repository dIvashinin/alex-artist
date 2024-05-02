import React from 'react'

function HomePage() {
  const url1 = "https://res.cloudinary.com/dzghua4dz/image/upload/v1714483076/alex/ojxr9qoq9nluhiryfwha.jpg";
  
  return (
    <>
      <img src={url1} className='pic1' alt='pic'/>
      <p>
        <span className='span1'>#</span>ale<span className='span-x'>x</span>ander<span className='span-s'>s</span>korobogatov {}
      </p>
    </>
  );
}

export default HomePage