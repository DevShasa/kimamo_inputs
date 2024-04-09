import React from 'react'
import PropTypes from 'prop-types'

function GenerateResults(props) {
    const {data} = props

    console.log("DATA FROM GENERATE--->", data.queryResults.references)


  return (
    <div className='results_container'>
        <div className='results_top'>
            <p>Status: {data?.queryResults?.Status}</p>
            <p>{` - `}</p>
            <p>Created Time: {data?.queryResults?.createdtime}</p>
        </div>
        <div>
            {data.queryResults.references.map((item)=>{
                return (
                    <div key={item}>{item}</div>
                )
            })}
        </div>
    </div>
  )
}

GenerateResults.propTypes = {
    data:PropTypes.object
}

export default GenerateResults
