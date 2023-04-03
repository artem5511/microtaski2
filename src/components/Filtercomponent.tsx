import React from 'react';
import {FilterType} from '../App';
import ButtonforFilter from './ButtonforFilter';


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
                {/*<button onClick={()=>props.onClickFilterHandler('all')}>all</button>*/}
                {/*<button onClick={()=>props.onClickFilterHandler('ruble')} name={'ruble'}>rubles</button>*/}
                {/*<button onClick={()=>props.onClickFilterHandler('dollar')} name={'dollar'}>dollars</button>*/}

                <ButtonforFilter name={'all'} callback={()=> props.onClickFilterHandler('all')}/>
                <ButtonforFilter name={'ruble'} callback={()=> props.onClickFilterHandler('ruble')}/> <ButtonforFilter name={'dollar'} callback={()=> props.onClickFilterHandler('dollar')}/>

            </div>
        </>
    );
};

export default Filtercomponent;