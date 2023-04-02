import React from 'react';

const Hookusestate = () => {
    let a = 1

    const onClickhandler = () => {
        ++a;
        console.log(a)
    }

    return (
        <div>
            <h1>a</h1>
            <button onClick={onClickhandler}>number</button>
        </div>
    );
};

export default Hookusestate;