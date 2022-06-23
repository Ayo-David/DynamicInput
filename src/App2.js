import React, { useEffect, useRef, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//import DynamicInput from './DynamicInput';
import './App.css';
import SearchEngine from './SearchEngline';
import FocusUseRef from './Focus_useRef';
import Timer from './timer';
import OrderList from './OrderList';
import Todo from './Todo';


function App() {

    const [myinput, setMyinput] = useState([""])
    const [active, setActive] = useState(0)
    const myfocus = useRef({})
    //myfocus.current = []



    // const useFocus = () => {
    //     const elementRef = useRef(null)
    //     const setFocus = () => elementRef.current && elementRef.current.focus()
    //     return [elementRef, setFocus]
    // }

    // const [newFocus, setNewFocus] = useFocus()

    const addInput = (i) => {

        setMyinput([...myinput, ""])
        // myfocus.current[i].focus()
        // console.log(myfocus.current[i])

        // setMyinput(myinput.concat(<DynamicInput
        //   key={index}
        //   mykey={index}
        //   onDelete={handleDelete}
        //   rowUp={handleRowUp}
        //   onClick={handleDelete} />))
        //console.log(index)
    }
    const handleChange = (e, mykey) => {
        const value = e.target.value
        const theinput = [...myinput]
        theinput[mykey] = value
        setMyinput(theinput)
        //setMyinput([...myinput, myinput[mykey] = value)
    }

    const handleRowUp = (id) => {
        let theinput = [...myinput]
        let newPosition = id - 1
        //console.log(id)
        if (id !== 0) {
            theinput.splice(id, 1)//it will return the element removed as an array and theinput will be the new array formed
            theinput.splice(newPosition, 0, myinput[id])
            //theinput.splice(newPosition, 0, theinput.splice(id, 1)[0])//merge the deletion and insertion process of splice

            setMyinput(theinput)
        }
        myfocus.current[newPosition].focus()
        // console.log(myfocus.current[newPosition])

    }

    const handleRowdown = (id) => {
        let theinput = [...myinput]
        let newPosition = id + 1
        //console.log(id)
        if (id !== myinput.length - 1) {
            theinput.splice(newPosition, 0, theinput.splice(id, 1)[0])//merge the deletion and insertion process of splice
            setMyinput(theinput)
        }
        myfocus.current[newPosition].focus()
        //console.log(myfocus.current[newPosition])
    }
    const handleDelete = (index) => {
        console.log(index)
        const theinput = [...myinput]

        theinput.splice(index, 1);

        setMyinput(theinput);
        myfocus.current[index].focus()

        //     const index = product.findIndex(prod => prod.id === id); //use id instead of index
        // if (index > -1) { //make sure you found it
        //  setProduct(prevState => prevState.splice(index, 1));
        // }   


        //console.log(myinput.length)

        // setMyinput(myinput.filter((input) =>
        //   input.key !== index
        // ))
    }

    //reverse order - as each input is created we add a ref to each input
    const addFocus = (el) => {
        //console.log('the ref value is', myfocus.current)
        if (el && !myfocus.current.includes(el)) {
            myfocus.current.push(el)
        }
        //console.log(el)
    }

    useEffect(() => {
        //this it doesn’t invoke the callback after initial rendering
        //until myfocus has values
        let count = parseInt(myfocus.current.length, 10)
        console.log('myfocus', count)
        if (myfocus.current.length === myinput.length) {
            myfocus.current[3].focus();
            console.log(myfocus.current[count])
        }
    }, [myinput])


    return (
        <Router>

            <Switch>
                <Route path='/' exact>
                    <div className="dynamicinput">
                        <h1>This is a dynamic Input System</h1>
                        <button onClick={() => addInput(myinput.length)}>+</button>
                        {
                            myinput.map((input, i) => <DynamicInput
                                key={i}
                                mykey={i}
                                myvalue={input}
                                rowUp={handleRowUp}
                                onDelete={handleDelete}
                                handleChange={handleChange}
                                handleRowdown={handleRowdown}
                                myRef={myfocus}
                            />)

                        }
                    </div>
                </Route>
                <Route path="/timer">
                    <Timer />
                </Route>
                <Route path='/focus'>
                    <FocusUseRef />
                </Route>
                <Route path='/search'>
                    <SearchEngine />
                </Route>
                <Route path='/order'>
                    <OrderList />
                </Route>
                <Route path='/todo'>
                    <Todo />
                </Route>
            </Switch>
        </Router>
    );
}

const DynamicInput = ({
    mykey,
    myvalue,
    rowUp,
    onDelete,
    handleChange,
    handleRowdown,
    myRef
}) => {
    //const myfocus = useRef()


    return (
        <div className="dynamic__input">
            <input
                ref={el => myRef.current[mykey] = el}
                type="text"
                value={myvalue}
                onChange={(e) => handleChange(e, mykey)}
                name={mykey}
            />
            <button onClick={() => rowUp(mykey)}>↑</button>
            <button onClick={() => handleRowdown(mykey)}>↓</button>
            <button onClick={() => onDelete(mykey)}>✕{mykey}</button>
        </div>
    )
}

export default App;
