import React, {useState} from 'react';

type ButtonInputPropsType = {
    name: string
    callBack: () => void
}
export const ButtonforInput = (props:ButtonInputPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack();
    }
    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};
