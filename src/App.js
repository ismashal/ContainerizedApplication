

import {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  const [num, setNum] = useState(0);
  const [fact, setFact] = useState(0);
  const [err,setErr] = useState('');

  const calFact = (e) => {
    e.preventDefault();
    let number = parseInt(num);
    setErr('');
    if (number < 0 || true == isNaN(num) ) {
        setErr('Invali Number'); setFact(0);
        return;
    }
    
    if ( number == 0 ) {
        setFact(1);
    } else {
      var numArray = [], i = (number+1), f=1;
      while (--i >= 1) numArray.push(i);
      numArray.map( ( i ) => {
        if( i >= 1 ) {
          f = f * ( i )
        }
        return null;
      })
      setFact(f);
    }
  }

  return (
    <div className="App mt-5">
      <div className="container">
        <div className="col-8 mx-auto">
          <div className="card card-success">
            <div className="card-header">
              Factorial
            </div>
            <form onSubmit={calFact}>
              <div className="card-body">
                { err && <p className="alert alert-danger">{err}</p> }
                { ( 0 !== fact ) && <p className="alert alert-success">{fact}</p> }
                
              
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Enter Number</label>
                  <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" onChange={(e) => setNum(e.target.value) } value={num} />
                  </div>
                </div>
              
              </div>

              <div className="card-footer">
              <button type="submit" className="btn btn-primary">Factorial</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
