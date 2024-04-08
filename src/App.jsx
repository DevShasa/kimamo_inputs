import { useState } from "react"

function App() {

  const [lookup, setLookup] = useState("")
  const [generate, setGenerate] = useState("")
  const [update, setUpdate] = useState("")

  return (
    <div className="container">
        <div>
          <p>Top Bar</p>
        </div>
        <div className="contents">
          <div className="content_search_inputs">
            <div className="input_section">
                <p>Lookup</p>
                <input 
                  type="text"
                  placeholder="lookup"
                  value={lookup}
                  onChange={(e)=>setLookup(e.target.value)}
                />
                <button>
                  Submit Lookup
                </button>    
            </div>
            <div className="input_section">
                <p>Update</p>
                <input 
                  type="text"
                  placeholder="lookup"
                  value={generate}
                  onChange={(e)=>setGenerate(e.target.value)}
                />
                <button>
                  Submit Update
                </button>    
            </div>
            <div className="input_section">
                <p>Generate</p>
                {/* Changing this to a dropdown shortly */}
                <input 
                  type="text"
                  placeholder="lookup"
                />
                <button>
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
