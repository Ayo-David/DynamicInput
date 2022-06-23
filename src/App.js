import React, { useEffect, useState } from 'react'
import DynamicInput from './DynamicInput';
import './App.css';

function App() {
  const [myinput, setMyinput] = useState([<DynamicInput
    key={0}
    mykey={0}
    onDelete={() => handleDelete(0)}
    rowUp={() => handleRowUp(0)} />])

  useEffect(() => {
    // myinput.map((input) =>
    //   console.log(input.key)
    // )
  }, [myinput])



  const addInput = (index) => {

    setMyinput([...myinput, <DynamicInput
      key={index}
      mykey={index}
      onDelete={handleDelete}
      rowUp={handleRowUp}
    />])

    // setMyinput(myinput.concat(<DynamicInput
    //   key={index}
    //   mykey={index}
    //   onDelete={handleDelete}
    //   rowUp={handleRowUp}
    //   onClick={handleDelete} />))
    //console.log(index)
  }

  const handleRowUp = (id) => {
    let newPosition = id - 1
    //console.log(id)
    if (id !== 0) {
      //let element =
      //console.log(id, newPosition)
      setMyinput(myinput.splice(newPosition, 0, myinput.splice(id, 1)[0]))
    }
    // setMyinput(myinput.map((input) =>
    //   input.key !== index
    // ))
  }
  const handleDelete = () => {
    //console.log(index)
    // const theinput = [...myinput]

    // theinput.splice(index, 1);

    // setMyinput(theinput);

    myinput.map((input) =>
      console.log(input.key)
    )
    // setMyinput(myinput.filter((input) =>
    //   input.key !== index
    // ))
  }
  return (
    <div className="dynamicinput">
      <h1>This is a dynamic Input System</h1>
      <button onClick={() => addInput(myinput.length)}>+</button>
      {myinput}
    </div>
  );
}

export default App;
