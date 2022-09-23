import React, { useState, useRef, useEffect } from "react";
import InputLine from './InputLine';

const DynamicInput = () => {
  const [myinputs, setMyInputs] = useState([])

  const myFocus = useRef({})

  useEffect(() => {
    const inputs_no = myinputs.length
    if (inputs_no > 0) {
      myFocus.current[inputs_no - 1].focus()
    }
  }, [myinputs.length])

  const addInput = () => {
    setMyInputs([...myinputs, ''])
  }

  const handleChange = (e, id) => {
    let value = e.target.value
    const theInput = [...myinputs]
    theInput[id] = value
    setMyInputs(theInput)
  }

  const moveUp = (id) => {
    const theInput = [...myinputs]
    const newPosition = id - 1
    if (id !== 0) {
      theInput.splice(id, 1)
      theInput.splice((id - 1), 0, myinputs[id])
      setMyInputs(theInput)
      myFocus.current[newPosition].focus()
    } else {
      myFocus.current[0].focus()
    }
  }
  const moveDown = (id) => {
    const theInput = [...myinputs]
    const newPosition = id + 1
    if (id !== myinputs.length - 1) {
      theInput.splice(id, 1)
      theInput.splice((id + 1), 0, myinputs[id])
      setMyInputs(theInput)
      myFocus.current[newPosition].focus()
    } else {
      myFocus.current[myinputs.length - 1].focus()
    }

  }
  const handleDelete = (id) => {
    const theInput = [...myinputs]
    theInput.splice(id, 1)
    setMyInputs(theInput)
  }

  return (
    <>
      TODO -- DynamicInput.jsx

      <div>
        <button data-testid="add-row"
          onClick={() => addInput()}>+</button>
        {
          myinputs.map((input, i) => {
            return (
              <InputLine
                key={i}
                id={i}
                handleChange={handleChange}
                myValue={input}
                moveUp={moveUp}
                moveDown={moveDown}
                handleDelete={handleDelete}
                myRef={myFocus}
              />
            )
          })
        }
      </div>
    </>
  );
};



export default DynamicInput; import React, { useState, useRef, useEffect } from "react";
import InputLine from './InputLine';

const DynamicInput = () => {
  const [myinputs, setMyInputs] = useState([])

  const myFocus = useRef({})

  useEffect(() => {
    const inputs_no = myinputs.length
    if (inputs_no > 0) {
      myFocus.current[inputs_no - 1].focus()
    }
  }, [myinputs.length])

  const addInput = () => {
    setMyInputs([...myinputs, ''])
  }

  const handleChange = (e, id) => {
    let value = e.target.value
    const theInput = [...myinputs]
    theInput[id] = value
    setMyInputs(theInput)
  }

  const moveUp = (id) => {
    const theInput = [...myinputs]
    const newPosition = id - 1
    if (id !== 0) {
      theInput.splice(id, 1)
      theInput.splice((id - 1), 0, myinputs[id])
      setMyInputs(theInput)
      myFocus.current[newPosition].focus()
    } else {
      myFocus.current[0].focus()
    }
  }
  const moveDown = (id) => {
    const theInput = [...myinputs]
    const newPosition = id + 1
    if (id !== myinputs.length - 1) {
      theInput.splice(id, 1)
      theInput.splice((id + 1), 0, myinputs[id])
      setMyInputs(theInput)
      myFocus.current[newPosition].focus()
    } else {
      myFocus.current[myinputs.length - 1].focus()
    }

  }
  const handleDelete = (id) => {
    const theInput = [...myinputs]
    theInput.splice(id, 1)
    setMyInputs(theInput)
  }

  return (
    <>
      TODO -- DynamicInput.jsx

      <div>
        <button data-testid="add-row"
          onClick={() => addInput()}>+</button>
        {
          myinputs.map((input, i) => {
            return (
              <InputLine
                key={i}
                id={i}
                handleChange={handleChange}
                myValue={input}
                moveUp={moveUp}
                moveDown={moveDown}
                handleDelete={handleDelete}
                myRef={myFocus}
              />
            )
          })
        }
      </div>
    </>
  );
};



export default DynamicInput;