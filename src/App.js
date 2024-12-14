
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [rows,setRows]=React.useState(2000);
  const[columns,setColumns]=React.useState(26);
  const [values,setValues] = useState({})

  const renderInputs = () => {
    let inputs = [];
    for (let r = 0; r <=rows; r++) {
      let row = [];
      for (let c = 0; c <=columns; c++) {
        c==0?row.push(
        <span style={{display:"block",visibility:c==0&&r==0&&"hidden",width:'46px', textAlign:"center",  border: "1px solid black"}}>{r}</span>
       ):r==0?row.push(
       <td> <span style={{display:"block",width:c==0&&r==0?"46px":"166px",textAlign:"center"}}>{String.fromCharCode(c+64)}</span></td>
      ):row.push(
      <td>
        <input onChange={(e)=>{
           setValues(prev=>({
            ...prev,
            [`${r},${c}`]:e.target.value
           }))
        }} type="text" />
        </td>
      );
      }
      inputs.push(
        <tr key={r} style={{ display: "flex" }}>
          {row}
        </tr>
      );
    }
    return inputs;
  };
  
  return (
    <>
          <button onClick={()=>{console.log(values)}}>print</button>
          <table>
                {renderInputs()} 
          </table>    
    
    </>
  );
}

export default App;
