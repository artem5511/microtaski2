import React, {useState} from 'react';

const Hookusestate = () => {
    // let a = 1
    let [a, setA] = useState(1)

    const onClickhandler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickhandler2 = () => {
        setA(0);
        console.log(a)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickhandler}>number</button>
            <button onClick={onClickhandler2}>0</button>
        </div>
    );
};

export default Hookusestate;