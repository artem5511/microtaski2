import React from 'react';
import {logDOM} from '@testing-library/react';

const Button = () => {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Vasya!")
    // }
    // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Ivan!")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        //ничего не передавать, в консоли должно показаться 100200
        console.log('100200')
    }
    const foo2 = (num: number) => {
        //передать цифру 100200
        console.log(num)
    }

    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>*/}

            {/*<button onClick={(event)=>{onClickHandler('Vasya')}}>MyYouTubeChanel-3</button>*/}
            {/*<button onClick={(event)=>{onClickHandler('Ivan')}}>MyYouTubeChanel-4</button>*/}
            {/*<button onClick={()=>{onClickHandler('some info')}}>MyYouTubeChanel-5</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=>{foo2(100200)}}>2</button>
        </div>
    );
};

export default Button;