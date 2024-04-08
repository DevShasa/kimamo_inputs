import { useState } from "react"

const LOOKUP_ENDPOINT = "https://api-uat.craneww.com/ws/rest/uat/v0/craneReference/RefernceNumber/refernceId?refernceNumber="
const GENERATE_ENDPOINT = "https://api-uat.craneww.com/ws/rest/uat/v0/craneReference/RefernceNumber/references"
const UPDATE_ENDPOINT = "https://api-uat.craneww.com/ws/rest/uat/v0/craneReference/RefernceNumber/refernceNumber"

function App() {

  const [lookup, setLookup] = useState("")
  const [generate, setGenerate] = useState({
    client:"",
    Unit:"",
    count:""
  })
  const [update, setUpdate] = useState("")
  // const [loading, setLoading] = useState(false)


  function captureGenerateInput(e){
    setGenerate(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  // async function submitLookup(){
  //   if(!lookup){
  //     alert("LOOKUP INPUT IS EMPTY")
  //     return
  //   }

  //   try {
  //     const results = await fetch(LOOKUP_ENDPOINT+lookup, {
  //       method:"GET",
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //     })
  //     if(results.ok){
  //       // query is successful 
  //       const data = await results.json()
  //       console.log(data) // display the data here ?  
  //     }
  //     throw new Error
  //   } catch (error) {
  //     alert("SOMETHING WENT WRONG SUBMITTING LOOKUP")
  //     console.log("error")
  //   }
  // }

  async function subbmitGenerate(){
    if(!generate.Unit || !generate.client || !generate.count){
      alert("ONE OR MORE INPUTS FOR GENERATE IS EMPTY")
      return
    }

    //console.log(process.env.REACT_APP_APIKEY)

    try {
      const results = await fetch(GENERATE_ENDPOINT, {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'x-api-key':process.env.REACT_APP_APIKEY
        },
        body:JSON.stringify(generate)
      })

      console.log("GENERATE ENDPOINT REQUEST:::", results)
      if(results.ok){
        const data = await results.json()
        console.log("GENERATE ENDPOINT DATA:::",data) 
      }

      throw new Error()

    } catch (error) {
      alert("SOMETHING WENT WRONG SUBMITTING GENERATE")
      console.log("error")
    }
  }

  // async function submitUpdate(){
  //   if(!lookup){
  //     alert("LOOKUP INPUT IS EMPTY")
  //     return
  //   }

  //   try {
  //     const results = await fetch(UPDATE_ENDPOINT, {
  //       method:"PUT",
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       body:JSON.stringify(generate)
  //     })

  //     if(results.ok){
  //       const data = await results.json()
  //       console.log(data) 
  //     }

  //     throw new Error

  //   } catch (error) {
  //     alert("SOMETHING WENT WRONG SUBMITTING UPDATE")
  //     console.log("error")
  //   }
  // }

  return (
    <div className="container">
        <div>
          <p>Top Bar</p>
        </div>
        <div className="contents">
          <div className="content_search_inputs">
            {/* <div className="input_section">
                <p>Lookup</p>
                <input 
                  type="text"
                  placeholder="lookup"
                  value={lookup}
                  onChange={(e)=>setLookup(e.target.value)}
                />
                <button onClick={submitLookup}>
                  Submit Lookup
                </button>    
            </div>
            <div className="input_section">
                <p>Update</p>
                <input 
                  type="text"
                  placeholder="lookup"
                  value={update}
                  onChange={(e)=>setUpdate(e.target.value)}
                />
                <button onClick={submitUpdate}>
                  Submit Update
                </button>    
            </div> */}
            <div className="input_section">
                <p>Generate</p>
                {/* <select value={generate} onChange={(e)=>setGenerate(e.target.value)}>
                  <option value="">Select an option</option>
                  <option value="Option 1">Select option one</option>
                  <option value="Option 2">Select option two</option>
                  <option value="Option 3">Select option three</option>
                  <option value="Option 4">Select option four</option>
                </select> */}
                <p id="label">Client</p>
                <input 
                  type="text"
                  placeholder="Client"
                  value={generate.client}
                  onChange={(e)=>captureGenerateInput(e)}
                  name="client"
                />
                <p id="label">Unit</p>
                <input 
                  type="text"
                  placeholder="unit"
                  value={generate.Unit}
                  onChange={(e)=>captureGenerateInput(e)}
                  name="Unit"
                />
                <p id="label">Count</p>
                <input 
                  type="number"
                  placeholder="count"
                  value={generate.count}
                  onChange={(e)=>captureGenerateInput(e)}
                  name="count"
                />
                <button onClick={subbmitGenerate}>
                  Submit Generate
                </button>    
            </div>
          </div>
          <div className="results">
            results go here
          </div>
        </div>
    </div>
  )
}

export default App
