

function App() {

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
                />
                <button>
                  Submit Lookup
                </button>    
            </div>
            <div className="input_section">
                <p>Lookup</p>
                <input 
                  type="text"
                  placeholder="lookup"
                />
                <button>
                  Submit Lookup
                </button>    
            </div>
            <div className="input_section">
                <p>Lookup</p>
                <input 
                  type="text"
                  placeholder="lookup"
                />
                <button>
                  Submit Lookup
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
