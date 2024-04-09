import React from 'react'
import PropTypes from 'prop-types'
import GenerateResults from './GenerateResults'


function Results(props) {

  const { data} = props
    
    if(data.queryName === "GENERATE"){
        return <GenerateResults data={data}/>
    }

  return (
    <div>Results</div>
  )
}

Results.propTypes = {
    loading:PropTypes.bool,
    data:PropTypes.object
}

export default Results
