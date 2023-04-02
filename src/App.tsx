import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Footer} from './components/Footer';
import {NewComponent} from './NewComponent';
import Button from './components/Button';
import Hookusestate from './components/Hookusestate';

// const students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 3, name: "John", age: 28},
//     {id: 3, name: "John", age: 28},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 7, name: "Richard", age: 68},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100}
// ]
// const topCars = [
//     {manufacturer: "BMW", model: 'm5cs'},
//     {manufacturer: "Mercedes", model: 'e63s'},
//     {manufacturer: "Audi", model: 'rs6'}
// ]

function App() {
    // const Button1Foo = (subscriber: string, age: number, address: string) => {
    //     console.log(subscriber, age, address)
    // }
    // const Button2Foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    // const Button3Foo = () => {
    //     console.log('Im stupid button')
    // }

    return (
        <div className="App">
            {/*<Header title={'New body'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'} num={5}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<NewComponent topCars={topCars}/>*/}
            {/*<Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21, 'Live in Minsk')}/>*/}
            {/*<Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Ivan')}/>*/}
            {/*<Button name={'Stupid BUTTON'} callBack={Button3Foo}/>*/}
            <Hookusestate/>
        </div>
    )
}

export default App;
