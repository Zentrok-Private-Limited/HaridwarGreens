import React from 'react'

function Contact() {
  return (
    <div className='h-screen py-10'>
      <div className='grid grid-cols-3'>

        <div className='flex justify-center p-4'>
            <h1 className='text-8xl font-bold'>Fresh answers for your <span className='text-white'>frozen needs.</span></h1>
        </div>

      
        <div className='w-full '>
          <img src="/contactus.png" alt="frozen vegetable" className='w-full h-full object-contain'/>
        </div>

        <div className='flex flex-col justify-center items-start p-4'>
          <p className='text-2xl'>We’d love to hear from you.
            <br />
            <span className='text-2xl text-white'>Doubts, Feedbacks or Queries.</span>
            <br />
            Every kind of feedback is appreciated.
          </p>
          <button className='bg-[#275123] text-white rounded-lg px-6 py-2 text-xl mt-6'>Say Hello!</button>
        </div>

      </div>


    </div>
  )
}

export default Contact