import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Footer} from './components/Footer';
import {NewComponent} from './components/NewComponent';
import Button from './components/Button';
import Hookusestate from './components/Hookusestate';
import Filtercomponent from './components/Filtercomponent';
import {Appinput} from './components/Appinput';

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

export type FilterType = 'all'|'dollar'|'ruble'


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

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    const[filter, setFilter] = useState('all')

    let currentMoney = money;
    if (filter==='dollar'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    }
    if (filter==='ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <Appinput/>
            {/*<Filtercomponent  currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*/}
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objFromMoneyArr.banknote}</span>*/}
            {/*                <span>{objFromMoneyArr.nominal}</span>*/}
            {/*                <span>{objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={()=>onClickFilterHandler('all')}>all</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('ruble')} name={'ruble'}>rubles</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('dollar')} name={'dollar'}>dollars</button>*/}
            {/*</div>*/}
        </>
    )
    // return (
    //     <div className='App'>
    //         {/*<Header title={'New body'}/>*/}
    //         {/*<Body titleForBody={'NEW BODY'}/>*/}
    //         {/*<Footer titleForFooter={'NEW FOOTER'} num={5}/>*/}
    //         {/*<NewComponent students={students}/>*/}
    //         {/*<NewComponent topCars={topCars}/>*/}
    //         {/*<Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21, 'Live in Minsk')}/>*/}
    //         {/*<Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Ivan')}/>*/}
    //         {/*<Button name={'Stupid BUTTON'} callBack={Button3Foo}/>*/}
    //         {/*<Hookusestate/>*/}
    //
    //     </div>
    // )
}

export default App;
