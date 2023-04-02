import React from 'react';

const Button = () => {
    const myFirstSubscriber = () => {
        console.log("Hello Im Vasya!")
    }
    const mySecondSubscriber = () => {
        console.log("Hello Im Ivan!")
    }
    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-1</button>*/}
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-2</button>
            <button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>
        </div>
    );
};

export default Button;