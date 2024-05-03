import React from 'react'

function DrawingsPage() {
  const url = "https://res.cloudinary.com/dzghua4dz/image/upload/v1714483076/alex/ojxr9qoq9nluhiryfwha.jpg"
  return (
    <div>
      <img src={url} className='pic' alt='pic'/>
    </div>
  )
}

export default DrawingsPage