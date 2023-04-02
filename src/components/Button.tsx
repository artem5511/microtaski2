import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Vasya!")
    // }
    // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Ivan!")
    // }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    // const foo1 = () => {
    //     //ничего не передавать, в консоли должно показаться 100200
    //     console.log('100200')
    // }
    // const foo2 = (num: number) => {
    //     //передать цифру 100200
    //     console.log(num)
    // }
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-2</button>*/}
            {/*<button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>*/}
            {/*<button onClick={(event)=>{onClickHandler('Vasya')}}>MyYouTubeChanel-3</button>*/}
            {/*<button onClick={(event)=>{onClickHandler('Ivan')}}>MyYouTubeChanel-4</button>*/}
            {/*<button onClick={()=>{onClickHandler('some info')}}>MyYouTubeChanel-5</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}

            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;