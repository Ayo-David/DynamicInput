import React, { useRef, useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import SearchEngine from './SearchEngline'
import Todo from './Todo'

export default function Timer() {
    const timerId = useRef(0)
    const [count, setCount] = useState(0)

    const { path } = useRouteMatch()

    const startCounter = () => {
        if (timerId.current) return
        //timerId.current = setInterval(() => setCount((c) => counter(c)), 1000)//using a callback function
        timerId.current = setInterval(() => setCount(c => c + 1), 1000)
    }

    console.log('count: ', count)
    console.log('timerId: ', timerId.current)

    const counter = (c) => {
        //let c = 0
        console.log(c)
        return c + 1
    }

    const stopCounter = () => {
        clearInterval(timerId.current)
        //interval = null
        timerId.current = 0
    }

    const resetCounter = () => {

        clearInterval(timerId.current)
        timerId.current = 0
        setCount(0)

    }
    //console.log('Count:', count)
    useEffect(() => {
        //console.log('Count:', count)
        //return () => clearInterval(timerId.current);
    }, [count]);

    return (

        <Switch>
            {/* <Route path={`${path}/`}>
                <div className="timer">

                    <h1>Timer {count}</h1>

                    <nav>
                        <ul>
                            <li><Link to={`${path}/searchme`}>Search</Link></li>

                        </ul>
                    </nav>
                    <button onClick={startCounter}>Start</button>
                    <button onClick={stopCounter} style={{ marginLeft: '20px' }}>Stop</button>
                    <button onClick={() => resetCounter()} style={{ marginLeft: '20px' }}>Reset</button>
                </div >
            </Route> */}
            <Route path={`${path}/searchme`} >
                <SearchEngine />
            </Route>
            <Route path={`${path}/todo`} >
                <Todo />
            </Route>
        </Switch >


    )
}

