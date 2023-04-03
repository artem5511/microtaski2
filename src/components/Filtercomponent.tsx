import React from 'react';
import {FilterType} from '../App';


type FilterPropsType = {
    onClickFilterHandler: (filter: FilterType) => void
    currentMoney: CurrentMoneyType[]
}

type CurrentMoneyType = {
    banknote: string
    nominal: number
    number: string
}

const Filtercomponent = (props: FilterPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('ruble')} name={'ruble'}>rubles</button>
                <button onClick={()=>props.onClickFilterHandler('dollar')} name={'dollar'}>dollars</button>
            </div>
        </>
    );
};

export default Filtercomponent;