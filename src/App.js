import {useState} from 'react'
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
//counter - state - to hold value
  
function incrementCounter(){
  setCounter(counter+1);
}

function decrementCounter(){
if(counter>0){
  setCounter(counter-1);
}
}
function resetCounter(){
  setCounter(0);
}



  return (
  
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'10%',
        
  
      }} className="App">
        <header className="App-header">
         <h1 style={{color:'red'}}>Counter Application</h1>
         <h1 style={{color:'brown',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',}}
                     >{counter}</h1>
  
  
      <div style={{display: 'flex',
        flexDirection: 'column',
     
        }}>
           <button 
           style={{padding:'10px',
                  color:'white',
                  backgroundColor:'green',
                  marginLeft:'5px',
                  borderRadius:'20px',
                  
                  
     }}
           onClick={incrementCounter}>Add</button>
           <button
            style={{padding:'10px',
            color:'white',
            backgroundColor:'red',
            marginLeft:'5px',
            borderRadius:'20px',
            
     }} 
     onClick={decrementCounter}>Reduce</button>
           <button
            style={{padding:'10px',
            color:'white',
            backgroundColor:'blue',
            marginLeft:'5px',
            borderRadius:'20px',
            
     }}
      onClick={resetCounter}>Reset</button>
      </div>
        </header>
      </div>

  );
}

export default App;
