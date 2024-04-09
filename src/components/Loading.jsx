import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='loader_container'>
        <h2>Fetching results</h2>
        <div className='loader_main'>
            <RotatingLines 
                  visible={true}
                  height="150"
                  width="150"
                  color="red"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
            />
        </div>
    </div>
  )
}


export default Loading
