import React, { useRef } from 'react'

const DynamicInput = ({ mykey, onDelete, rowUp }) => {
    const focus = useRef()

    return (
        <div className="dynamic__input" mykey={mykey} key={mykey}>
            <input type="text" />
            <button onClick={() => rowUp(mykey)}>↑</button>
            <button>↓</button>
            <button onClick={() => onDelete(mykey)}>✕{mykey}</button>
        </div>
    );
}

export default DynamicInput;