import React from 'react'
import PropTypes from 'prop-types'

function GenerateResults(props) {
    const {data} = props

    console.log("DATA FROM GENERATE--->", data)

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

GenerateResults.propTypes = {
    data:PropTypes.object
}

export default GenerateResults
