import React from 'react'
import PropTypes from 'prop-types'
import { readabletime } from '../../utils/readableTIme'

function GenerateResults(props) {
    const {data} = props

    console.log("DATA FROM GENERATE--->", data.queryResults.references)


  return (
    <div className='results_container'>
        <div className='results_top'>
            <p>Status: {data?.queryResults?.Status}</p>
            <p>{` - `}</p>
            <p>Created: {readabletime(data?.queryResults?.createdtime)}</p>
        </div>
        <div className='reference_list'>
            {data.queryResults.references.map((item)=>{
                return (
                    <div key={item} className='reference_item'>{item}</div>
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
