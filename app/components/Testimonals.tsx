import React from 'react'

function Testimonals() {
  return (
    <div className="relative h-screen bg-[url('/aboutbg5.jpg')] bg-cover bg-center bg-no-repeat">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content (optional) */}
      <div className="relative z-10 flex items-end h-full text-white">
        <h1 className="text-4xl font-semibold">Testimonials</h1>
      </div>

    </div>
  )
}

export default Testimonals