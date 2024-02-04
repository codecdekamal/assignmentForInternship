import React from 'react'

const Wrapper = ({children,color}) => {
  return (
    <>
      <div className='mt-5 mb-3 w-screen '>
           <div className={`w-5/6  shadow-md flex justify-center content-center mx-auto  bg-gray-400 border-2 border-${color}-500  py-2 px-10  rounded-2xl`}>
            <p className=' text-pretty'>
                {children}
            </p>
           </div>
      </div>
    </>
  )
}

export default Wrapper
